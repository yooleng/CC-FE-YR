// ----------------------------------------------------------------------------------
// 04-02. graphql-mutation
// ----------------------------------------------------------------------------------
import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";

// 하드코딩 (동적 X) -> 예시
const CREATE_BOARD = gql`
  mutation {
    createBoard(writer: "철수", title: "제목!!", contents: "내용!!") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [myfunction] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await myfunction();
    console.log(result);

    // data의 메세지를 alert창에 띄우기
    alert(result.data.createBoard.message);
  };

  return (
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
    </>
  );
}
