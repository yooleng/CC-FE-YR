// ----------------------------------------------------------------------------------
//  day 21. global-state
//  01. props, data, prev의 실체 파악하기 - 04
// ----------------------------------------------------------------------------------

// 4. 아래의 코드가 정상적으로 작동하지 않습니다. 제대로 작동하도록 만들어 보세요. (단, qwer은 변경하지 않습니다.)
// path : http://localhost:3000/21-global-state/1/04

// const [state, setState] = useState(0);
// setState((qwer) => prev + 1);

import { useState } from "react";

export default function Page04() {
  const [state, setState] = useState(0);

  function onClickCountUp() {
    setState((qwer) => qwer + 1);
  }

  return (
    <>
      <div>{state}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
    </>
  );
}
