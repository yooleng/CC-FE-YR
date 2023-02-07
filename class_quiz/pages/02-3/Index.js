// ----------------------------------------------------------------------------------
// 3. state를 활용하여 인증번호 생성하기
// ----------------------------------------------------------------------------------

// 1-1) let과 document.getElementById()를 사용하기

// export default function QuizPage3() {
//   function numberCertify() {
//     const Number = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
//     document.getElementById("number").innerText = Number;
//   }
//   return (
//     <>
//       <div id="number">000000</div>
//       <button onClick={numberCertify}>인증번호전송</button>
//     </>
//   );
// }

// ----------------------------------------------------------------------------------

// 1-2) state를 사용하기

import { useState } from "react";

export default function QuizPage3() {
  const [number, setNumber] = useState("000000");

  function numberCertify() {
    setNumber(String(Math.floor(Math.random() * 1000000)).padStart(6, "0"));
  }
  return (
    <>
      <div>{number}</div>
      <button onClick={numberCertify}>인증번호전송</button>
    </>
  );
}
