// ----------------------------------------------------------------------------------
//  day 21. global-state
//  01. props, data, prev의 실체 파악하기 - 01.container
// ----------------------------------------------------------------------------------

// 1) 함수형 컴포넌트 불러오는 방식을 함수 자체를 불러오는 방식으로 변경해 보세요.
// path : http://localhost:3000/21-global-state/1/01/01-container

import Presenter from "./01-presenter";

export default function Container() {
  return (
    <>
      {/* <Presenter child="철수" /> */}
      {Presenter({ child: "철수" })}
    </>
  );
}
