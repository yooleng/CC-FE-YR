// ----------------------------------------------------------------------------------
// 07. BoardWrite.container - page의 js 로직 부분
// ----------------------------------------------------------------------------------

import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";

import { useMutation } from "@apollo/client";
import { useState } from "react";

export default function BoardWrite() {
  // 변수를 state에 저장하기
  const [myColor, setMycolor] = useState(false);

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
    if (event.target.value && title && contents) {
      setMycolor(true);
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (writer && event.target.value && contents) {
      setMycolor(true);
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    // if (writer !== "" && title !== "" && contents !== "") {
    //   setMycolor(true);
    // }
    if (writer && title && event.target.value) {
      setMycolor(true);
    }
    // 두 if문이 같은 것
  };

  return (
    <>
      <div>### container ###</div>
      <BoardWriteUI
        onClickSubmitProps={onClickSubmit}
        onChangeWriterProps={onChangeWriter}
        onChangeTitleProps={onChangeTitle}
        onChangeContentsProps={onChangeContents}
        myColor={myColor}
      />
    </>
  );
}
