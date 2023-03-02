import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

// --------------------------------------------------------------------------------
// firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrdTgcL89m0hbedd6MsMNaOmJr00aKljc",
  authDomain: "cc-yr-8eda6.firebaseapp.com",
  projectId: "cc-yr-8eda6",
  storageBucket: "cc-yr-8eda6.appspot.com",
  messagingSenderId: "1084455347025",
  appId: "1:1084455347025:web:f2684882c3f6431b94a970",
};

// Initialize Firebase
// firebaseApp = 접속정보
export const firebaseApp = initializeApp(firebaseConfig);

// --------------------------------------------------------------------------------

function MyApp({ Component, pageProps }: AppProps) {
  // 모든 페이지에서 useMutation을 사용하기 위한 설정
  // ApolloClient 공식 홈페이지에 가면 설정방법 메뉴얼이 있음

  return (
    <ApolloSetting>
      <>
        <Global styles={globalStyles} />
        <div>### app.js ###</div>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </ApolloSetting>
  );
}

export default MyApp;
