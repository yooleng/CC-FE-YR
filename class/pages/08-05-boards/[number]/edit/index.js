// ----------------------------------------------------------------------------------
// 08-05. boards - edit (수정 페이지)
// ----------------------------------------------------------------------------------

import BoardWriteComponent from "@/src/components/units/board/08-write/BoardWrite.container";

export default function BoardsEditPage() {
  return (
    <>
      <BoardWriteComponent isEdit={true} />
    </>
  );
}
