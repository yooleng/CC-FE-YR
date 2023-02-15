// ----------------------------------------------------------------------------------
// 08-05. boards - new (등록 페이지)
// ----------------------------------------------------------------------------------

import BoardWriteComponent from "@/src/components/units/board/08-write/BoardWrite.container";

export default function BoardsNewPage() {
  return (
    <>
      <BoardWriteComponent isEdit={false} />
    </>
  );
}
