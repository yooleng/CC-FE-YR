// ----------------------------------------------------------------------------------
//  21-03. state-prev
// ----------------------------------------------------------------------------------

import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  function onClickCountUp() {
    // 1.화살표함수
    setCount((prev) => prev + 1);

    // 2. 함수선언식
    setCount(function (prev) {
      return prev + 1;
    });

    // 3. 함수 안에 로직 넣기
    setCount((prev) => {
      // 로직 추가 가능
      // if() 등
      // for() 등
      // ...
      return prev + 1;
    });

    // 4. 매개변수 바꾸기
    setCount((dsfvjisaldgjkslgvml) => dsfvjisaldgjkslgvml + 1);
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!</button>
    </>
  );
}
