// ----------------------------------------------------------------------------------
//  27-04. web-editor-detail
// ----------------------------------------------------------------------------------

import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import DOMPurify from "dompurify";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;

export default function BoardDetailPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });

  console.log("data", data);

  return (
    <>
      {/* <div>{router.query.id}번 게시글로 이동이 완료되었습니다.</div> */}
      <div>작성자: {data ? data.fetchBoard.writer : "loading"}</div>
      <div>제목: {data ? data.fetchBoard.title : "loading"}</div>

      {/* html 안에 태그를 그대로 삽입해서 태그 그대로 렌더링하기 */}
      {typeof window !== "undefined" && (
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.fetchBoard.contents),
          }}
        ></div>
      )}

      {/* <div>내용: {data ? data.fetchBoard.contents : "loading"}</div> */}
    </>
  );
}

// playground XSS 공격
// <img src='#' onerror='console.log(localStorage.getItem(\"accessToken\"))' />
