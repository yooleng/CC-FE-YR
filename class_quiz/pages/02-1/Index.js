// ----------------------------------------------------------------------------------
// 1. state를 활용하여 안녕하세요 ⇒ 반갑습니다 로 변경하기
// ----------------------------------------------------------------------------------

// 1-1) let과 document.getElementById()를 사용하기

// export default function QuizPage1() {
//   function onClickTextChanger() {
//     document.getElementById("hello").innerText = "반갑습니다";
//   }

//   return (
//     <>
//       <button id="hello" onClick={onClickTextChanger}>
//         안녕하세요
//       </button>
//     </>
//   );
// }

// ----------------------------------------------------------------------------------

// 1-2) state를 사용하기

import { useState } from "react";

export default function QuizPage1() {
  const [hello, setHello] = useState("안녕하세요");

  function onClickTextChanger() {
    setHello("반갑습니다");
  }

  return (
    <>
      <button onClick={onClickTextChanger}>{hello}</button>
    </>
  );
}
