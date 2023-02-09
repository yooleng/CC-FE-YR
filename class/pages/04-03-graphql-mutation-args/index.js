// ----------------------------------------------------------------------------------
// 04-03. graphql-mutation-args
// ----------------------------------------------------------------------------------
import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";

// 하드코딩 하지 않고, 사용자가 input창에 입력한 값을 가져오기 (동적)

// writer, title, contents는 모두 바뀔 수 있는 값이므로 변수로 지정하기 ($)
// 단, 상단에 변수의 타입을 지정해주어야 한다. (playground 참고)

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    # 변수의 타입을 적는 곳
    createBoard(writer: $writer, title: $title, contents: $contents) {
      # 실제 우리가 전달할 변수 적는 곳
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [myfunction] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await myfunction({
      variables: {
        // variables가 $ 역할을 해줌

        writer: "베니",
        title: "제목입니다",
        contents: "내용입니다",
      },
    });
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
