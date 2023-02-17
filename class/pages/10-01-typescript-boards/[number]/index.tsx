// ----------------------------------------------------------------------------------
// 10-01. boards - detail (상세 페이지) - typescript
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

export default function BoardDetailPage() {
  const router = useRouter();
  console.log("router", router);
  console.log("router.query.number", router.query.number);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });

  console.log("data", data);

  // 수정하러 이동하기 버튼 함수 생성
  const onClickMoveToEdit = () => {
    router.push(`/10-01-typescript-boards/${router.query.number}/edit`);
  };

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  return (
    <>
      <div>{router.query.number}번 게시글로 이동이 완료되었습니다.</div>
      <div>작성자: {data ? data.fetchBoard.writer : "loading"}</div>
      <div>제목: {data ? data.fetchBoard.title : "loading"}</div>
      <div>내용: {data ? data.fetchBoard.contents : "loading"}</div>
      <button onClick={onClickMoveToEdit}>수정하러 이동하기</button>
    </>
  );
}
