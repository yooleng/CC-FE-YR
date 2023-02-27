// ----------------------------------------------------------------------------------
// 16-01. inputs-spread / 02-after
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
  // writer, title, contents를 하나로 묶기

  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });
  // const [writer, setWriter] = useState("");
  // const [title, setTitle] = useState("");
  // const [contents, setContents] = useState("");

  const [myfunction] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await myfunction({
      variables: {
        ...inputs,
      },
    });
    console.log(result);
    alert(result.data.createBoard.message);
  };

  const onChangeInputs = (event) => {
    setInputs({
      // writer: inputs.writer,
      // title: inputs.title,
      // contents: inputs.contents,
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <>
      작성자: <input id="writer" type="text" onChange={onChangeInputs} />
      <br />
      제목: <input id="title" type="text" onChange={onChangeInputs} />
      <br />
      내용: <input id="contents" type="text" onChange={onChangeInputs} />
      <br />
      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
    </>
  );
}
