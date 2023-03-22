// ----------------------------------------------------------------------------------
//  31-04. crp-reflow-repaint-with-boards
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

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  return (
    <>
      {/* 임시 배열 10개를 생성하여, 데이터가 없을 때에도 높이 30px를 유지해서 reflow 방지 */}
      {(data?.fetchBoards ?? new Array(10).fill(1)).map((el) => (
        <div key={el._id} style={{ height: "30px" }}>
          <span style={{ margin: "10px" }}>{el.writer} </span>
          <span style={{ margin: "10px" }}>{el.title}</span>
        </div>
      ))}

      {/* map 사용해서 리팩토링하기 */}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {" "}
          {index + 1}{" "}
        </span>
      ))}
    </>
  );
}
