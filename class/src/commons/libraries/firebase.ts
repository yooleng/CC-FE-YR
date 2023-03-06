// --------------------------------------------------------------------------------
//  필요한 부분에서만 firebase를 불러와서 사용할 수 있도록 분리
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
