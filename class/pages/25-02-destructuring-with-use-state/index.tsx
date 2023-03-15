// ----------------------------------------------------------------------------------
//  25-02. destructuring-with-use-state
// ----------------------------------------------------------------------------------

// 최신 방식 - useState

import { useState } from "react";

export default function CounterStatePage() {
  const result = useState(0); // 구조분해할당

  function onClickCountUp() {
    // setCount(count + 1);
    result[1](6);
  }

  return (
    <div>
      <div>{result[0]}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
    </div>
  );
}
