// ----------------------------------------------------------------------------------
// 12-06. state-prev
// ----------------------------------------------------------------------------------

import React, { useState } from "react";

export default function CounterPrevStatePage() {
  const [count, setCount] = useState(0); // 구조분해할당

  function onClickCountUp() {
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    console.log(count);
  }

  function onClickCountDown() {
    setCount((prevState) => prevState - 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      <button onClick={onClickCountDown}>카운트 내리기</button>
    </div>
  );
}
