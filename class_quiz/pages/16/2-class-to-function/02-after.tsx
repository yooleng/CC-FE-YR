// ----------------------------------------------------------------------------------
// day 16. 2-class-to-function - after (클래스 컴포넌트를 함수형 컴포넌트로 변경하기)
// ----------------------------------------------------------------------------------

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function MyComponent() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    console.log("컴포넌트가 마운트됐습니다~");

    return () => {
      console.log("컴포넌트가 제거됩니다~");
    };
  }, []);

  useEffect(() => {
    console.log("컴포넌트가 변경됐습니다~");
  });

  const onClickCounter = () => {
    console.log("count", count);
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    // void router.push("/");
    void router.push("../3-open-api/01");
  };

  return (
    <>
      <div>카운트: {count}</div>
      <button onClick={onClickCounter}>카운트(+1)</button>
      <button onClick={onClickMove}>이동하기</button>
    </>
  );
}
