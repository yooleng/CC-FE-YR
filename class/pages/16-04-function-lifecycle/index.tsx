// ----------------------------------------------------------------------------------
// 16-04. function-lifecycle
// ----------------------------------------------------------------------------------

import { useEffect, useState } from "react";
import useRouter from "next/router";

export default function ClassCounterPage() {
  const [count, setCount] = useState(0);
  const router = useRouter;

  // class vs function

  // componentDidMount() {
  //   console.log("그려지고 나서 실행!");
  // }
  useEffect(() => {
    console.log("그려지고 나서 실행");
  }, []);

  // componentDidUpdate() {
  //   console.log("변경되고 나서 실행!");
  // }
  useEffect(() => {
    console.log("변경되고 나서 실행");
  });

  // componentWillUnmount() {
  //   console.log("사라질 때 실행!");
  //   // ex) 채팅방 나가기 api
  // }
  useEffect(() => {
    return () => {
      console.log("사라질 때 실행!");
    };
  }, []);

  // // useEffect
  // // 1. 하나로 합치기 가능

  // useEffect(() => {
  //   console.log("그려지고 나서 실행!");

  //   return () => {
  //     console.log("사라질 때 실행!");
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log("변경되고 나서 실행");
  // });

  // // 2. useEffect의 잘못된 사용 예제 (추가렌더링, 무한루프 주의)

  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, []);

  const onClickCountUp = () => {
    console.log(count);
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    void router.push("/");
  };

  console.log("나는 언제 실행되게~?");

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기 !</button>
      <button onClick={onClickMove}>나가기 !</button>
    </>
  );
}
