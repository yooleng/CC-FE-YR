// ----------------------------------------------------------------------------------
//  day 25. custom-hooks - useCount
// ----------------------------------------------------------------------------------

import { useState } from "react";

export function useCount() {
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount((prev) => prev + 1);
  };

  return {
    count,
    onClickCountUp,
  };
}
