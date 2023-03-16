// ----------------------------------------------------------------------------------
//  Apollo (graphql 설정)
// ----------------------------------------------------------------------------------

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

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
    console.log("지금은 브라우저!!");
    const result = localStorage.getItem("accessToken");
    console.log(result);
    if (result) setAccessToken(result);
  }, []);

  // -------------------------------------------------------------------------------

  const uploadLink = createUploadLink({
    // 이 uri로 업로드 기능이 가능하도록 변경해준 것
    uri: "http://backendonline.codebootcamp.co.kr/graphql",

    // 헤더에 accessToken을 추가해줌 -> 앞으로 모든 api에는 토큰이 첨부되어 들어간다. (없는 경우에는 빈 문자열)
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]), // 위의 업로드 기능을 link로 가져온 것
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
