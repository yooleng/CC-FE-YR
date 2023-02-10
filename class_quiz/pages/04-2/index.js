// ----------------------------------------------------------------------------------
// day 4 : 동기/비동기 & apollo-client
// ----------------------------------------------------------------------------------
// GRAPHQL-API 요청하기 - CREATE_BOARD
// ----------------------------------------------------------------------------------

import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";
import { useState } from "react";

// // 하드코딩
// const CREATE_BOARD = gql`
//   mutation {
//     createBoard(writer: "베니", title: "제목!!", contents: "내용!!") {
//       _id
//       number
//       message
//     }
//   }
// `;

// input
const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
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
    const result = await myfunction({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    alert(result.data.createBoard.message);
  };

  // 이벤트 핸들러 함수 작성
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
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </>
  );
}
