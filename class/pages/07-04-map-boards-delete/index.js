// ----------------------------------------------------------------------------------
// 07-04. map-boards-delete - 목록 삭제하기
// ----------------------------------------------------------------------------------

import { useQuery, gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { Fragment } from "react";

// 목록 불러오기 (query)
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

// 목록 삭제하기 (mutation)
const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      _id
      number
      message
    }
  }
`;

// style
const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

export default function StaticRoutedPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  console.log("data", data?.fetchBoards);

  const onClickDelete = async (event) => {
    await deleteBoard({
      variables: {
        // event.target.id 는 html 코드에서 가져온 것이기 때문에 항상 string이다.
        // 따라서 숫자로 형변환해준다.
        number: Number(event.target.id),
      },
      // refetchQueries fetch 했던 것을 다시 fetch한다. (리프레시한 효과)
      refetchQueries: [{ query: FETCH_BOARDS }],
      // 따라서 삭제버튼을 누르면, 백엔드로 삭제 mutation, 재조회 query 총 두 번의 요청이 간다.
    });
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        // 반드시 중복되지 않는 값으로 key를 주어야 한다. (index 안됨!)
        // map((el, index) => (<Row key= {index}> 가 안되는 이유?
        // 삭제하고 refetchQueries를 통해 데이터를 다시 받아오면, 새로운 객체에 같은 index가 부여되기 때문!

        // <Fragment key={el.number} />
        // 빈 Fragment에는 속성을 적용할 수 없으므로 위와 같이 사용

        <Row key={el.number}>
          <Column>
            <input type="checkBox" />
          </Column>
          <Column>{el.number} </Column>
          <Column>{el.title} </Column>
          <Column>{el.contents}</Column>
          <Column>
            {/* 클릭한 그 게시물을 삭제하기 위해 id를 {el.number}로 부여 */}
            <button id={el.number} onClick={onClickDelete}>
              삭제
            </button>
          </Column>
        </Row>
      ))}
    </>
  );
}
