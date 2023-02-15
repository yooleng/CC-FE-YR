// ----------------------------------------------------------------------------------
// 08-03. board-component-new
// ----------------------------------------------------------------------------------

import BoardComponent from "@/src/components/units/board/08-board-component";

export default function BoardNewPage() {
  return <BoardComponent isEdit={false} />;
  // true-false로 보내면 유지보수가 쉽다.
}
