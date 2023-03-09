// ----------------------------------------------------------------------------------
//  day 21. global-state
//  01. props, data, prev의 실체 파악하기 - 02.container
// ----------------------------------------------------------------------------------

// 2) 함수형 컴포넌트 불러오는 방식을 함수 자체를 불러오는 방식으로 변경해 보세요.
// path : http://localhost:3000/21-global-state/1/02/02-container

import Presenter from "./02-presenter";

export default function Container() {
  return (
    <>
      {/* <Presenter child="철수" age={13} /> */}
      {Presenter({ child: "철수", age: 13 })}
    </>
  );
}
