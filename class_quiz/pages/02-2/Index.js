// ----------------------------------------------------------------------------------
// 2. state를 활용하여 카운터 만들기
// ----------------------------------------------------------------------------------

// 1-1) let과 document.getElementById()를 사용하기

// export default function QuizPage2() {
//   function onClickCountUp() {
//     const count = Number(document.getElementById("count").innerText) + 1;
//     document.getElementById("count").innerText = count;
//   }

//   function onClickCountDown() {
//     const count = Number(document.getElementById("count").innerText) - 1;
//     document.getElementById("count").innerText = count;
//   }

//   return (
//     <div>
//       <div id="count">0</div>
//       <button onClick={onClickCountUp}>카운트 올리기</button>
//       <button onClick={onClickCountDown}>카운트 내리기</button>
//     </div>
//   );
// }

// ----------------------------------------------------------------------------------

// 1-2) state를 사용하기

import { useState } from "react";

export default function QuizPage2() {
  const [count, setCount] = useState(0);

  function onClickCountUp() {
    setCount(count + 1);
  }

  function onClickCountDown() {
    setCount(count - 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      <button onClick={onClickCountDown}>카운트 내리기</button>
    </div>
  );
}
