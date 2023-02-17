// ----------------------------------------------------------------------------------
// 10. BoardWrite.presenter - page의 html 부분 - typescript
// ----------------------------------------------------------------------------------

// export default와 export를 한 번에 사용하는 방법
import * as S from "./BoardWrite.styles";
import { ChangeEvent } from "react";

interface Iprops {
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  myColor: boolean;
  isEdit: boolean;
  data: any;
  // void: return이 없는 타입
  // data는 일단 any로 지정
}

export default function BoardWriteComponentUI(props: Iprops) {
  return (
    <>
      <div>### presenter ###</div>
      {/*  페이지에 defaultValue 추가하기 */}
      작성자:{" "}
      <S.RedInput
        type="text"
        onChange={props.onChangeWriter}
        defaultValue={props.data?.fetchBoard.writer}
      />
      <br />
      제목:{" "}
      <input
        type="text"
        onChange={props.onChangeTitle}
        defaultValue={props.data?.fetchBoard.title}
      />
      <br />
      내용:{" "}
      <input
        type="text"
        onChange={props.onChangeContents}
        defaultValue={props.data?.fetchBoard.contents}
      />
      <br />
      {/* presenter에서 emotion으로 props 던지기 */}
      <S.BlueButton
        aaa="15px"
        bbb="yellow"
        ccc={props.myColor}
        // 바인딩 로직 변경 (등록하기/수정하기 조건 추가)
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
      >
        {props.isEdit ? "수정하기" : "등록하기"}
      </S.BlueButton>
    </>
  );
}
