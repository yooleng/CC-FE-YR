// ----------------------------------------------------------------------------------
//  day 29. callback - ref
// ----------------------------------------------------------------------------------

import axios from "axios";
import { useState } from "react";

export default function CallbackQuiz() {
  const [results, setResults] = useState([]);

  const myCallback = () => {
    const aaa = new XMLHttpRequest();
    aaa.open("get", `http://numbersapi.com/random?min=1&max=200`);
    aaa.send();
    aaa.addEventListener("load", function (res) {
      console.log("1번) 랜덤 숫자 뽑기)", res);
      const num = res.target.response.split(" ")[0]; // 랜덤 숫자 뽑기

      const bbb = new XMLHttpRequest();
      bbb.open("get", `https://koreanjson.com/posts/${num}`);
      bbb.send();
      bbb.addEventListener("load", (res) => {
        console.log("2번) 해당 게시물 조회하기", res);
        const userId = JSON.parse(res.target.response).UserId;

        const ccc = new XMLHttpRequest();
        ccc.open("get", `https://koreanjson.com/posts?userId=${userId}`);
        ccc.send();
        ccc.addEventListener("load", (res) => {
          console.log("3번) 해당 user가 등록한 글 조회하기", res);

          const result = JSON.parse(res.target.response);
          setResults((prevResults) => [...(prevResults || []), result]);
        });
      });
    });
  };

  const myPromise = () => {
    axios
      .get(`http://numbersapi.com/random?min=1&max=200`)
      .then((res) => {
        const num = res.data.split(" ")[0];
        return axios.get(`https://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        const userId = res.data.UserId;
        return axios.get(`https://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        setResults(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const myAsyncAwait = async () => {
    try {
      const num = await axios
        .get(`http://numbersapi.com/random?min=1&max=200`)
        .then((res) => res.data.split(" ")[0]);
      const userId = await axios
        .get(`https://koreanjson.com/posts/${num}`)
        .then((res) => res.data.UserId);
      const result = await axios.get(
        `https://koreanjson.com/posts?userId=${userId}`
      );
      setResults(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button onClick={myCallback}>Callback</button>
      <button onClick={myPromise}>Promise</button>
      <button onClick={myAsyncAwait}>Async/Await</button>
      {results && (
        <ul>
          {results.map((el, index) => (
            <li key={index}>{el.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}
