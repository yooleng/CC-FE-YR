import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";
// import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  // 모든 페이지에서 useMutation을 사용하기 위한 설정
  // ApolloClient 공식 홈페이지에 가면 설정방법 메뉴얼이 있음

  return (
    <>
      {/* 모든 페이지에서 카카오맵을 다운로드 받으므로, 비효율적임
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=46eccc28df26f5b1d770fd6d6762717d"
        ></script>
      </Head> */}
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
    </>
  );
}

export default MyApp;
