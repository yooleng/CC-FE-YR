// ----------------------------------------------------------------------------------
// 10-04. graphql-codegen-query - 2- useQuery 타입지정
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
        number: 13774,
      },
    }
  );

  console.log("data", data);

  return (
    <>
      <div>2번 게시글로 이동이 완료되었습니다.</div>
      <div>작성자: {data && data?.fetchBoard?.writer}</div>
      <div>제목: {data && data?.fetchBoard?.title}</div>
      <div>내용: {data && data?.fetchBoard?.contents}</div>
    </>
  );
}
