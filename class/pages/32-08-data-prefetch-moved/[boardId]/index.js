// ----------------------------------------------------------------------------------
//  32-08. data-prefetch-moved / boards - detail (상세 페이지)
// ----------------------------------------------------------------------------------

import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  # graphql 내용 등록
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function BoardDetailPage() {
  const router = useRouter();
  console.log("router", router);
  console.log("router.query.boardId", router.query.boardId);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  console.log("data", data);

  // // 수정하러 이동하기 버튼 함수 생성
  // const onClickMoveToEdit = () => {
  //   router.push(`/32-08-data-prefetch-moved/${router.query.id}/edit`);
  // };

  return (
    <>
      {/* <div>{router.query.number}번 게시글로 이동이 완료되었습니다.</div> */}
      <div>작성자: {data ? data.fetchBoard.writer : "loading"}</div>
      <div>제목: {data ? data.fetchBoard.title : "loading"}</div>
      <div>내용: {data ? data.fetchBoard.contents : "loading"}</div>
      {/* <button onClick={onClickMoveToEdit}>수정하러 이동하기</button> */}
    </>
  );
}
