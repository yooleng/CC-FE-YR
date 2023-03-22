// ----------------------------------------------------------------------------------
//  31-01-01. memoization - parent
// ----------------------------------------------------------------------------------

import { useCallback, useMemo, useState } from "react";
import MemoizationChildPage from "./02-child";
import { PurpleTag } from "./emotion";

export default function MemoizationParentPage() {
  console.log("부모가 렌더링 됩니다!");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  // 1. useMemo 로 변수 기억하기
  const RandomNum = useMemo(() => Math.random(), []);
  console.log("RandomNum", RandomNum);

  // 2. useCallback 으로 함수 기억하기
  const onClickCountLet = useCallback(() => {
    console.log("countLet", countLet + 1);
    countLet += 1; // === countLet = countLet + 1
  }, []);

  // 3. useCallback 사용 시 주의사항 => state 사용 주의
  const onClickCountState = useCallback(() => {
    // console.log("countState", countState + 1);
    // setCountState(countState + 1); // 이러면 계속 0+1만 됨
    setCountState((prev) => prev + 1);
  }, []);

  //   // 4. useMemo 로 나만의 useCallback 만들어보기 (응용)
  //   const onClickCountState = useMemo(
  //     () => () => {
  //       console.log("countState", countState + 1);
  //       setCountState(countState + 1);
  //     },
  //     []
  //   );

  // prettier-ignore
  return (
    <>
      <div>-----------------------------------</div>
      
      <h1> 저는 <PurpleTag>부모</PurpleTag> 컴포넌트 입니다! </h1>

      <div>Count(let) : {countLet}</div>
      <button onClick={onClickCountLet}>Count(let) +1 올리기</button>

      <div>Count(state) : {countState}</div>
      <button onClick={onClickCountState}>Count(state) +1 올리기</button>

      {/* <div>Count(state) : {countState}</div>
      <button onClick={() => {
        setCountState((prev) => prev + 1);
        }}
      >
          Count(state) +1 올리기
      </button> */}

      <div>-----------------------------------</div>

      <MemoizationChildPage countState={countState}/>
    </>
  );
}
