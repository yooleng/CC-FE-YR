// ----------------------------------------------------------------------------------
//  Apollo (graphql 설정)
// ----------------------------------------------------------------------------------

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
  fromPromise,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
// import { GraphQLClient } from "graphql-request";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

const GLOBAL_STATE = new InMemoryCache(); // globalState!

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  // globalState에서 accessToken 뽑아오기
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // -------------------------------------------------------------------------------
  // 브라우저에서 실행되는 코드인지, 서버에서 실행되는 코드인지 구분하는 방법

  // // 1. 프리렌더링 예제 - process.browser 방법

  // // process.browser : 지금 현재 브라우저 상태인가요?
  // if (process.browser) {
  //   // console.log("지금은 브라우저!!");
  //   // const result = localStorage.getItem("accessToken");
  //   // console.log(result);
  //   // if (result) setAccessToken(result);
  // } else {
  //   // console.log("지금은 프론트엔드 서버!!(yarn dev로 실행시킨 프로그램 내부)");
  //   // const result = localStorage.getItem("accessToken");
  //   // console.log(result);
  //   // if (result) setAccessToken(result);
  // }

  // // 2. 프리렌더링 예제 - typeof window 방법

  // if (typeof window !== "undefined") {
  //   // console.log("지금은 브라우저!!");
  //   // const result = localStorage.getItem("accessToken");
  //   // console.log(result);
  //   // if (result) setAccessToken(result);
  // } else {
  //   // console.log("지금은 프론트엔드 서버!!(yarn dev로 실행시킨 프로그램 내부)");
  //   // const result = localStorage.getItem("accessToken");
  //   // console.log(result);
  //   // if (result) setAccessToken(result);
  // }

  // // 3. 프리렌더링 무시 - useEffect() 방법 (componentDidMount 시점)
  // // useEffect : DOM이 만들어지고(화면이 그려지고) 실행됨 -> 서버 X, 브라우저 O

  useEffect(() => {
    // 1. 기존 방식 (refreshToken 이전 방식)
    console.log("지금은 브라우저!!");
    const result = localStorage.getItem("accessToken");
    console.log(result);
    if (result) setAccessToken(result);

    // 2. 새로운 방식 (refreshToken 이후 방식)
    void getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  // -------------------------------------------------------------------------------

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러를 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰만료 에러인지 체크하기(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // 2-1. refreshToken으로 accessToken을 재발급 받기 : 분리한 파일 import
            getAccessToken().then((newAccessToken) => {
              // 2-2. 재발급 받은 accessToken을 globalState에 저장하기
              setAccessToken(newAccessToken);

              // 3-1. 재발급 받은 accessToken으로 방금 실패한 쿼리의 정보 수정하기
              if (typeof newAccessToken !== "string") return;
              operation.setContext({
                headers: {
                  ...operation.getContext().headers, // 이 headers에는 만료된 토큰이 추가되어 있는 상태
                  Authorization: `Bearer ${newAccessToken}`, // 토큰만 새 것으로 바꿔치기
                },
              });
            })
            // 3-2. 방금 수정한 쿼리 재요청하기 (토큰 바꿔치기)
          ).flatMap(() => forward(operation));
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    // 이 uri로 업로드 기능이 가능하도록 변경해준 것
    uri: "https://backendonline.codebootcamp.co.kr/graphql",

    // 헤더에 accessToken을 추가해줌 -> 앞으로 모든 api에는 토큰이 첨부되어 들어간다. (없는 경우에는 빈 문자열)
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    // 위의 업로드 기능을 link로 가져온 것
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    // cache: new InMemoryCache(), // 나중에 할 것
    cache: GLOBAL_STATE, // 페이지 전환(_app.tsx 리렌더)되어도, 캐시 유지
    connectToDevTools: true,
  });

  // prettier-ignore
  return (
      <ApolloProvider client={client}>
        {props.children}
      </ApolloProvider>
  );
}
