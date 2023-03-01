// ----------------------------------------------------------------------------------
// day 16. 1-component-lifecycle (컴포넌트 생명주기)
// ----------------------------------------------------------------------------------

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ComponentLifecyclePage() {
  const [isChange, setIsChange] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log("Rendered!");
    alert("Rendered!");
    return () => {
      console.log("Bye!!");
      alert("Bye!!");
    };
  }, []);

  useEffect(() => {
    console.log("Changed!!");
    alert("Changed!!");
  }, [isChange]);

  const onClickIsChange = () => {
    setIsChange(true);
  };
  console.log(isChange);

  const onClickMove = () => {
    // router.push("/");
    router.push("./2-class-to-function/02-after");
  };

  return (
    <>
      <button onClick={onClickIsChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
    </>
  );
}
