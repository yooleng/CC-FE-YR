// ----------------------------------------------------------------------------------
//  day 29. callback
// ----------------------------------------------------------------------------------

// 1. 랜덤한 숫자를 가지고 오는 API : `http://numbersapi.com/random?min=1&max=200`
// 2. post API:  `https://koreanjson.com/posts/${num}`
// 3. 유저가 쓴 다른 글 API : `https://koreanjson.com/posts?userId=${userId}`

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
      .then((res1) => {
        const num = res1.data.split(" ")[0]; // 랜덤 숫자 뽑기
        console.log("1번) 랜덤 숫자 뽑기)", num);

        return axios.get(`https://koreanjson.com/posts/${num}`);
      })
      .then((res2) => {
        const userId = res2.data.UserId;
        console.log("2번) 해당 게시물 조회하기", res2);

        return axios.get(`https://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res3) => {
        console.log("3번) 해당 user가 등록한 글 조회하기", res3);
        const result = res3.data;
        setResults([result]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const myAsyncAwait = async () => {
    try {
      const res1 = await axios.get(
        `http://numbersapi.com/random?min=1&max=200`
      );
      const num = res1.data.split(" ")[0];
      console.log("1번) 랜덤 숫자 뽑기)", num);

      const res2 = await axios.get(`https://koreanjson.com/posts/${num}`);
      const userId = res2.data.UserId;
      console.log("2번) 해당 게시물 조회하기", res2);

      const res3 = await axios.get(
        `https://koreanjson.com/posts?userId=${userId}`
      );
      console.log("3번) 해당 user가 등록한 글 조회하기", res3);

      setResults((prevResults) => [...(prevResults || []), res3.data]);
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
          {results.map((result, index) => (
            <li key={index}>{result[0].title}</li>
          ))}
        </ul>
      )}
    </>
  );
}
