// ----------------------------------------------------------------------------------
//  25-05. custom-hooks - useMoveToPage
// ----------------------------------------------------------------------------------

import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/store";

export function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  const onClickMoveToPage = (path: string) => () => {
    setVisitedPage(path);
    void router.push(path);
  };
  return {
    visitedPage,
    onClickMoveToPage,
  };
}
