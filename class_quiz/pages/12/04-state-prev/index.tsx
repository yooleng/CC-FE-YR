// ----------------------------------------------------------------------------------
// day 12 - 04. state-prev
// ----------------------------------------------------------------------------------

import { useState } from "react";

export default function PrevstatePage() {
  const [state, setState] = useState(0);

  function sumAll() {
    setState((prevState) => prevState + 1);
    setState((prevState) => prevState + 2);
    setState((prevState) => prevState + 3);
    setState((prevState) => prevState + 4);
  }
  console.log("state", state);

  return (
    <>
      <div>결과는: {state}</div>
      <button onClick={sumAll}>실행!</button>
    </>
  );
}
