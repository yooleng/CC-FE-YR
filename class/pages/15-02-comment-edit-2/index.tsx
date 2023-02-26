// ----------------------------------------------------------------------------------
// 15-02. comment-edit-2 - 댓글(게시글)) 여러 개 수정하기
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
  const [myIndex, setMyIndex] = useState([
    false, // index 0
    false, // index 1
    false, // index 2
    false, // index 3
    false, // index 4
    false, // index 5
    false, // index 6
    false, // index 7
    false, // index 8
    false, // index 9
  ])
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  // console.log("data", data?.fetchBoards);
  

  const onClickEdit = (event : MouseEvent<HTMLButtonElement>) => {
    const qqq = [...myIndex]
    qqq[Number(event.currentTarget.id)] = true
    setMyIndex(qqq)
    console.log("###", qqq)
  }
 
  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          {!myIndex[index] && (
            <div >
              <span style={{ margin: "10px" }}>{el.writer} </span>
              <span style={{ margin: "10px" }}>{el.title}</span>
              <button id={String(index)} onClick={onClickEdit}>수정하기</button>
            </div>
          )}
          {myIndex[index] && (
            <div>
              수정할 내용: <input type="text" />
            </div>
          )}
        </div>
      ))}
    </>
  );
}
