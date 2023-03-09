// ----------------------------------------------------------------------------------
//  day 21. global-state
//  02. Recoil 적용하기 - new page
// ----------------------------------------------------------------------------------

// path : http://localhost:3000/21-global-state/2-recoil/new

import { useRouter } from "next/router";
import BoardWrite from "../../../src/components/units/21-example/write/BoardWrite.container";

export default function GlobalStatePage() {
  const router = useRouter();

  const onClickEdit = () => {
    router.push("./edit");
  };
  return (
    <>
      <BoardWrite />
      <button onClick={onClickEdit}>수정하기로 이동</button>
    </>
  );
}
