// ----------------------------------------------------------------------------------
//  day 21_02. Recoil - BoardWrite.presenter
// ----------------------------------------------------------------------------------

// path : http://localhost:3000/21-global-state/2-recoil/edit

import { useRecoilState } from "recoil";
import { isEditState } from "../../../commons/store";

export default function BoardWriteUI() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  return <h1>{isEdit ? "수정하기" : "등록하기"}</h1>;
}
