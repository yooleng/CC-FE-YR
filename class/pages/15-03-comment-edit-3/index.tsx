// ----------------------------------------------------------------------------------
// 15-03. comment-edit-3 - return 부분을 별도의 컴포넌트로 분리하기 (컴포넌트별로 state 따로 관리하기)
// ----------------------------------------------------------------------------------

import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import BoardCommentItem from "../../src/components/units/15-board-comment-item";

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

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  // console.log("data", data?.fetchBoards);
  
 
  return (
    <>
      {data?.fetchBoards.map((el, index) => (
       <BoardCommentItem key={el._id} el={el}/>
      ))}
    </>
  );
}
