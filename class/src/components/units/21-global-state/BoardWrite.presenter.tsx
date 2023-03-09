// ----------------------------------------------------------------------------------
//  21-06. global-state - BoardWrite.presenter
// ----------------------------------------------------------------------------------

import { useRecoilState } from "recoil";
import { isEditState } from "../../../commons/store";

export default function BoardWriteUI() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  return <>{isEdit ? "수정하기" : "등록하기"}</>;
}
