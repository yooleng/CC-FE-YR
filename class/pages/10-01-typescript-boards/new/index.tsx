// ----------------------------------------------------------------------------------
// 10-01. boards - new (등록 페이지) - typescript
// ----------------------------------------------------------------------------------

import BoardWriteComponent from "../../../src/components/units/board/10-write-ts/BoardWrite.container";

export default function BoardsNewPage() {
  return (
    <>
      {BoardWriteComponent({ isEdit: false })}
      {/* == <BoardWriteComponent isEdit={false} /> */}
    </>
  );
}
