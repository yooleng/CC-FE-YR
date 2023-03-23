// ----------------------------------------------------------------------------------
//  day 31-01-02. memoization - child
// ----------------------------------------------------------------------------------

import { memo } from "react";
import { BlueTag } from "./emotion";

function MemoizationChildPage(Props: any) {
  console.log("자식이 렌더링 됩니다!");

  // prettier-ignore
  return (
    <>
      <div>-----------------------------------</div>
      <h1>저는 <BlueTag>자식</BlueTag> 컴포넌트 입니다!</h1>
      <div>-----------------------------------</div>
    </>
  );
}

export default memo(MemoizationChildPage);
// export default MemoizationChildPage;
