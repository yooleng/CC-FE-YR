// ----------------------------------------------------------------------------------
// 05-10. dynamic-routed-board-mutation
// ----------------------------------------------------------------------------------

import { useQuery, gql } from "@apollo/client";
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

// useMutation과 달리 useQuery는 페이지가 열리자마자 자동으로 실행됨
// 변수는 실행페이지에 설정해주어야 하므로 이동 후 페이지인 여기 코드 작성

export default function StaticRoutedPage() {
  const router = useRouter();
  console.log("router", router);
  console.log("router.query.number", router.query.number);
  // 1페이지면 router.query.number가 1, 2페이지면 2

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    },
    // 위에서 $number를 Int로 받기로 했는데,
    // router.query.number 값은 주소에서 꺼내온 것이므로 String이다.
    // 따라서 Number로 형변환!
    // router.query.number 뒤의 number은 폴더명이다.
  });

  console.log("data", data);

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  return (
    <>
      <div>{router.query.number}번 게시글로 이동이 완료되었습니다.</div>
      <div>작성자: {data && data.fetchBoard.writer}</div>
      <div>제목: {data ? data.fetchBoard.title : "로딩중입니다."}</div>
      <div>내용: {data && data.fetchBoard.contents}</div>
    </>
  );
}
