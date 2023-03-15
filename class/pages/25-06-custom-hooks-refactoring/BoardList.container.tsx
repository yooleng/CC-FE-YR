// ----------------------------------------------------------------------------------
//  25-06. custom-hooks-refactoring
// ----------------------------------------------------------------------------------

import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
// import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
// import { MouseEvent, useState } from "react";
import { useMoveToPage } from "../../src/components/commons/hooks/useMoveToPage";
import { useSearch } from "../../src/components/commons/hooks/useSearch";

export default function BoardList() {
  const { onClickMoveToPage } = useMoveToPage();
  const { keyword, onChangeKeyword } = useSearch();
  // const router = useRouter();
  // const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  // const onClickMoveToBoardNew = () => {
  //   void router.push("/boards/new");
  // };

  // const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
  //   void router.push(`/boards/${event.currentTarget.id}`);
  // };

  // const onChangeKeyword = (value: string) => {
  //   setKeyword(value);
  // };

  return (
    <BoardListUI
      data={data}
      // onClickMoveToBoardNew={onClickMoveToBoardNew}
      // onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClickMoveToPage={onClickMoveToPage}
      refetch={refetch}
      refetchBoardsCount={refetchBoardsCount}
      count={dataBoardsCount?.fetchBoardsCount}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
    />
  );
}
