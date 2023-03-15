// ----------------------------------------------------------------------------------
//  25-05. custom-hooks-move-to-page
// ----------------------------------------------------------------------------------

import { useMoveToPage } from "../../src/components/commons/hooks/useMoveToPage";

export default function CustomHoooksUseMoveToPage() {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      <button onClick={onClickMoveToPage("/boards")}>게시판으로 이동</button>
      <button onClick={onClickMoveToPage("/markets")}>마켓으로 이동</button>
      <button onClick={onClickMoveToPage("/mypage")}>마이페이지로 이동</button>
    </>
  );
}
