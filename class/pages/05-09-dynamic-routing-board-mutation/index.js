// ----------------------------------------------------------------------------------
// 05-09. dynamic-routing-board-mutation
// ----------------------------------------------------------------------------------

import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";
import { useRouter } from "next/router";
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

  const router = useRouter();

  const onClickSubmit = async () => {
    // try ~ catch 예외처리

    try {
      const result = await myfunction({
        variables: {
          writer: writer,
          title: title,
          contents: contents,
        },
      });
      console.log(result);

      // data의 메세지를 alert창에 띄우기
      alert(result.data.createBoard.message);

      // router.push (위치는 상관없음)
      console.log("###", result.data.createBoard.number);

      // 주소는 문자열이므로 "" 밖에서 더해주어야 한다.
      // router.push(
      //   "/05-10-dynamic-routed-board-mutation/" + result.data.createBoard.number
      // );

      // 더하기 하기 번거로우므로 ``(템플릿 리터럴) 사용하기
      router.push(
        `/05-10-dynamic-routed-board-mutation/${result.data.createBoard.number}`
      );
    } catch (error) {
      console.log("error", error.message);
      alert(error.message);

      // error는 백엔드에서 보내줌
      // 성공하면 catch 실행 X, 실패하면 실행 O
      // 단, 위의 try 코드를 시도하다가 하나라도 실패하면
      // 아랫줄을 모두 무시하고 바로 catch가 실행된다.
    }
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
