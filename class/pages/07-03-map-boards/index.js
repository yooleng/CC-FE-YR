// ----------------------------------------------------------------------------------
// 07-03. map-boards - 목록 보기
// ----------------------------------------------------------------------------------

import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

// useMutation과 달리 useQuery는 페이지가 열리자마자 자동으로 실행됨
// 변수는 실행페이지에 설정해주어야 하므로 이동 후 페이지인 여기 코드 작성

export default function StaticRoutedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  console.log("data", data?.fetchBoards);

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <Row>
          <Column>
            <input type="checkBox" />
          </Column>
          <Column>{el.number} </Column>
          <Column>{el.title} </Column>
          <Column>{el.contents}</Column>
        </Row>
      ))}
    </>
  );
}
