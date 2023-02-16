// ----------------------------------------------------------------------------------
// 09-01. boards - edit (수정 페이지)
// ----------------------------------------------------------------------------------

import BoardWriteComponent from "@/src/components/units/board/09-write/BoardWrite.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

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

export default function BoardsEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });
  return (
    <>
      <BoardWriteComponent isEdit={true} data={data} />
    </>
  );
}
