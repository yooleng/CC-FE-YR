// ----------------------------------------------------------------------------------
// 04-01. rest-get
// ----------------------------------------------------------------------------------

import axios from "axios";
import { useState } from "react";

export default function RestGetPage() {
  const [title, setTitle] = useState("");

  // 비동기로 api 요청하기 : 요청한 api가 변수에 담기지 않아 Promise만 받아온다.

  // function onClickAsync() {
  //   const result = axios.get("https://koreanjson.com/posts/1");
  //   console.log("비동기", result);
  // }

  // 화살표함수로 바꾸기
  const onClickAsync = () => {
    const result = axios.get("https://koreanjson.com/posts/1");
    console.log("비동기", result);
  };

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // 동기로 api 요청하기 : 요청한 api가 응답할 때까지 기다리고 이를 변수에 담는다.

  // async function onClickSync() {
  //   const result = await axios.get("https://koreanjson.com/posts/1");
  //   console.log("동기", result);
  //   console.log("동기(data)", result.data);
  //   console.log("동기(data.title)", result.data.title);

  // 화살표함수로 바꾸기
  const onClickSync = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log("동기", result);
    console.log("동기(data)", result.data);
    console.log("동기(data.title)", result.data.title);

    // 받아온 데이터를 state에 저장해서 화면에 랜더링하기
    setTitle(result.data.title);
  };

  return (
    <>
      <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
      <button onClick={onClickSync}>REST-API(동기) 요청하기</button>
      <div>{title}</div>
    </>
  );
}
