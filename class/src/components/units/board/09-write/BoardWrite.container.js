// ----------------------------------------------------------------------------------
// 09. BoardWrite.container - page의 js 로직 부분
// ----------------------------------------------------------------------------------

import BoardWriteComponentUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";

import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

export default function BoardWriteComponent(props) {
  // 변수를 state에 저장하기
  const router = useRouter();

  const [myColor, setMycolor] = useState(false);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [myfunction] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  // 등록하기
  const onClickSubmit = async () => {
    // 이 함수에서는 router.query.number하면 안됨
    // -> 경로가 08-05-boards-new 이기 때문에 (number 생성 전) 주소에 number가 없음 : undefined

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

    // router 추가
    router.push(`/09-01-boards/${result.data.createBoard.number}`);
  };

  // 수정하기
  const onClickUpdate = async () => {
    // 변경된 값만 백엔드에 보내주기 위한 코드
    // 빈 값을 생성하고 바뀐 값만 if문으로 처리
    // 없는 것을 삭제하는 것보다, 빈 것을 만들고, 있는 것을 추가하는 것이 더 간단하다.
    const myvariables = {
      // number은 무조건 있어야 하는 값이므로 초기값으로 설정한다.
      number: Number(router.query.number),
    };
    if (writer) myvariables.writer = writer;
    // writer가 있으면, writer라는 key에 state에 입력한 값을 넣어줘!
    // writer가 빈 문자열만 아니라면 myvariables.writer = writer가 작동한다.
    if (title) myvariables.title = title;
    if (contents) myvariables.contents = contents;

    // 1. 수정하기 mutation 날리기
    const result = await updateBoard({
      variables: myvariables,
      // variables: {
      //   // 주소에 있는 게시글 번호 가져오기
      //   number: Number(router.query.number),
      //   // shorthand property : key, value 같으면 생략 가능
      //   writer,
      //   title,
      //   contents,
      // },
    });

    // 2. 수정하고 상세페이지로 이동하기
    console.log(result);
    alert(result.data.updateBoard.message);
    router.push(`/09-01-boards/${result.data.updateBoard.number}`);
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
    if (writer && title && event.target.value) {
      setMycolor(true);
    }
  };

  return (
    <>
      <div>### container ###</div>
      <BoardWriteComponentUI
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        myColor={myColor}
        isEdit={props.isEdit}
        // BoardsNewPage에서 받아온 isEdit이기 때문에 props.isEdit이다. 실수주의!
        data={props.data}
      />
    </>
  );
}
