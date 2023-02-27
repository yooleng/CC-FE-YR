// ----------------------------------------------------------------------------------
// 16-01. inputs-spread / 01-before
// ----------------------------------------------------------------------------------

import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

// graphql 쿼리문
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
  // 변수를 state에 저장하기
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [myfunction] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    // 스코프 체인
    // 해당 변수가 이 함수(중괄호) 안에 있으면 현재 스코프
    // 값이 이 스코프 안에 있으면 그것을 먼저 반환하고, 없으면 스코프 체인을 통해 상위 스코프로 올라가서 찾는다.
    const result = await myfunction({
      variables: {
        // variables가 $ 역할을 해줌
        // input에 있는 값을 state에 저장하고, state에 있는 값을 아래 변수에 저장하기

        // variables에 있는 변수($writer~)와 위의 state가 이름이 같지만,
        // 둘은 다른 것이기 때문에 이름이 같아도 상관없다.

        writer,
        title,
        contents,
      },
    });
    console.log(result);

    // data의 메세지를 alert창에 띄우기
    alert(result.data.createBoard.message);
  };

  // 화살표 함수로 이벤트 핸들러 함수 작성 후 html에 바인딩
  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <>
      작성자: <input type="text" onChange={onChangeWriter} />
      <br />
      제목: <input type="text" onChange={onChangeTitle} />
      <br />
      내용: <input type="text" onChange={onChangeContents} />
      <br />
      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
    </>
  );
}
