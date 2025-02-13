import ApolloSetting from "../src/components/commons/apollo";
import Layout from "../src/components/commons/layout";
import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  // 모든 페이지에서 useMutation을 사용하기 위한 설정
  // ApolloClient 공식 홈페이지에 가면 설정방법 메뉴얼이 있음

  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <div>### app.js ###</div>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
