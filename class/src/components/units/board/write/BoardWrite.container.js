// ----------------------------------------------------------------------------------
// BoardWrite.container - page의 js 로직 부분
// ----------------------------------------------------------------------------------

import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";
import { useMutation } from "@apollo/client";
import { useState } from "react";

export default function BoardWrite() {
  // javascript 영역

  // 변수를 state에 저장하기
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [myfunction] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    // 스코프 체인
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
    // html 영역
    <>
      <div>### container ###</div>
      <BoardWriteUI
        // aaa="철수"
        onClickSubmitProps={onClickSubmit}
        onChangeWriterProps={onChangeWriter}
        onChangeTitleProps={onChangeTitle}
        onChangeContentsProps={onChangeContents}
        // 자동으로 props가 생성된다.
        // onClickSubmitProps = key, {} 안의 값 = value
        // 실무에서는 보통 value와 이름을 똑같이 함. 지금은 구분을 위해 props를 붙여주었다.
      />
    </>
  );
}
