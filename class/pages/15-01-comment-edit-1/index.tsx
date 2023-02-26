// ----------------------------------------------------------------------------------
// 15-01. comment-edit-1 - 기본 수정하기
// ----------------------------------------------------------------------------------

import { useQuery, gql } from "@apollo/client";
import { MouseEvent, useState } from "react";
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

export default function CommentEdit1Page() {
  const [myIndex, setMyIndex] = useState(5)
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  console.log("data", data?.fetchBoards);

  const onClickEdit = (event : MouseEvent<HTMLButtonElement>) => {
    setMyIndex(Number(event.currentTarget.id))
    
  }

  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          {index !== myIndex && (
            <div >
              <span style={{ margin: "10px" }}>{el.writer} </span>
              <span style={{ margin: "10px" }}>{el.title}</span>
              <button id={String(index)} onClick={onClickEdit}>수정하기</button>
            </div>
          )}
          {index === myIndex && (
            <div>
              수정할 내용: <input type="text" />
            </div>
          )}
        </div>
      ))}
    </>
  );
}
