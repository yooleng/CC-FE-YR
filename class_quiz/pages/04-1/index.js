// ----------------------------------------------------------------------------------
// day 4 : 동기/비동기 & apollo-client
// ----------------------------------------------------------------------------------
// REST-API 요청과 비동기 처리
// ----------------------------------------------------------------------------------

import axios from "axios";
import { useState } from "react";

export default function QuizPage1() {
  const [user, setUser] = useState("");

  const onClickAsync = async () => {
    const result = await axios.get("https://koreanjson.com/users");
    console.log(result);
    console.log(result.data);
    setUser(result.data);
  };

  return <button onClick={onClickAsync}>REST-API 요청하기</button>;
}
