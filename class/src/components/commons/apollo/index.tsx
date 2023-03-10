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
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

const GLOBAL_STATE = new InMemoryCache(); // globalState!

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  // globalState에서 accessToken 뽑아오기
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

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
  });

  // prettier-ignore
  return (
      <ApolloProvider client={client}>
        {props.children}
      </ApolloProvider>
  );
}
