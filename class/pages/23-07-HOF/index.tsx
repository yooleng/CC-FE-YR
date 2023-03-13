// ----------------------------------------------------------------------------------
//  23-07. HOF (Higher Order Function)
// ----------------------------------------------------------------------------------

import { useQuery, gql } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  console.log("data", data?.fetchBoards);

  const onClickPage =
    (boardId: number) => (event: MouseEvent<HTMLSpanElement>) => {
      void refetch({ page: boardId });
    };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
        </div>
      ))}

      {/* map 사용해서 리팩토링하기 */}

      {new Array(10).fill(1).map((_, index) => (
        // <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
        <span key={index + 1} onClick={onClickPage(index + 1)}>
          {" "}
          {index + 1}{" "}
        </span>
      ))}
    </>
  );
}

// onClickPage(index + 1)(event) // 실행될 땐 이런식으로
