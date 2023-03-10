// ----------------------------------------------------------------------------------
//  day 21. global-state
//  02. Recoil 적용하기 - edit page
// ----------------------------------------------------------------------------------

import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../src/commons/store";
import BoardWrite from "../../../src/components/units/21-example/write/BoardWrite.container";

export default function GlobalStatePage() {
  //   const [isEdit, setIsEdit] = useState(false);
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  }, []);

  return <BoardWrite isEdit={true} />;
}
