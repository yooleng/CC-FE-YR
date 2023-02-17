// ----------------------------------------------------------------------------------
// 10. BoardWrite.container - page의 js 로직 부분 - typescript
// ----------------------------------------------------------------------------------

import BoardWriteComponentUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";

import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

// props는 함수의 매개변수이므로 미리 타입을 지정해주어야 한다.
// BoardWriteComponent 함수는 등록, 수정페이지에서 사용하고 있는데,
// 수정페이지에서는 data라는 객체도 있으므로 타입에 추가해주어야 한다.
// 단, 등록페이지에는 data가 없으므로, data는 있을수도, 없을수도 있는 객체 : ? 처리

interface Iprops {
  isEdit: boolean;
  data?: any;
}

export default function BoardWriteComponent(props: Iprops) {
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
    router.push(`/10-01-typescript-boards/${result.data.createBoard.number}`);
  };

  // 수정하기
  const onClickUpdate = async () => {
    // 변경된 값만 백엔드에 보내주기 위한 코드
    // 빈 값을 생성하고 바뀐 값만 if문으로 처리
    // 없는 것을 삭제하는 것보다, 빈 것을 만들고, 있는 것을 추가하는 것이 더 간단하다.

    // myvariables에서 number만 받고 있어서 number라고 자동으로 추론하므로 에러 발생
    // myvariables을 위한 타입을 생성해주어야 한다.

    interface IMyvariables {
      number: number;
      writer?: string;
      title?: string;
      contents?: string;
      // 수정 시 writer, title, contents는 없을 수도 있으므로 ? 처리
    }

    const myvariables: IMyvariables = {
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
    });

    // 2. 수정하고 상세페이지로 이동하기
    console.log(result);
    alert(result.data.updateBoard.message);
    router.push(`/10-01-typescript-boards/${result.data.updateBoard.number}`);
  };

  // 화살표 함수로 이벤트 핸들러 함수 작성 후 html에 바인딩
  // onChange(change)할 때 발생하는 이벤트에 대한 타입스크립트 : ChangeEvent (in react)\
  // 그런데 html의 어떤 태그를 onChange 했느냐에 따라 타입이 다르므로 <> 안에 element 종류 추가하기!

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value && title && contents) {
      setMycolor(true);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (writer && event.target.value && contents) {
      setMycolor(true);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
    if (writer && title && event.target.value) {
      setMycolor(true);
    }
  };

  return (
    <>
      <div>### container ###</div>

      {BoardWriteComponentUI({
        onClickSubmit: onClickSubmit,
        onClickUpdate: onClickUpdate,
        onChangeWriter: onChangeWriter,
        onChangeTitle: onChangeTitle,
        onChangeContents: onChangeContents,
        myColor: myColor,
        isEdit: props.isEdit,
        data: props.data,
      })}

      {/* 위와 아래는 같은 함수 */}
      {/* <BoardWriteComponentUI
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        myColor={myColor}
        isEdit={props.isEdit}
        // BoardsNewPage에서 받아온 isEdit이기 때문에 props.isEdit이다. 실수주의!
        data={props.data}
      /> */}
    </>
  );
}
