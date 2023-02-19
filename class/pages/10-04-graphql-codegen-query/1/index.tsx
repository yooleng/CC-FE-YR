// ----------------------------------------------------------------------------------
// 10-04. graphql-codegen-query - 1 - useQuery 타입지정
// ----------------------------------------------------------------------------------

import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  # graphql 내용 등록
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        number: 13777,
      },
    }
  );

  console.log("data", data);

  return (
    <>
      <div>1번 게시글로 이동이 완료되었습니다.</div>

      {/* && 연산자 */}
      <div>작성자: {data && data.fetchBoard?.writer}</div>
      {/* 삼항연산자 */}
      <div>제목: {data ? data.fetchBoard?.title : "로딩중입니다."}</div>
      {/* 옵셔널 체이닝 */}
      <div>내용: {data?.fetchBoard?.contents}</div>
      {/* 게시물이 삭제되었을 때에는 안에 내용이 없으므로 이것도 ? 처리해줘야 함 -> typescript */}
    </>
  );
}
