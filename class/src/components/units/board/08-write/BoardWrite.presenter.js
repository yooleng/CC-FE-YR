// ----------------------------------------------------------------------------------
// 08. BoardWrite.presenter - page의 html 부분
// ----------------------------------------------------------------------------------

// export default와 export를 한 번에 사용하는 방법
import * as S from "./BoardWrite.styles";

export default function BoardWriteComponentUI(props) {
  return (
    <>
      <div>### presenter ###</div>
      작성자: <S.RedInput type="text" onChange={props.onChangeWriter} />
      <br />
      제목: <input type="text" onChange={props.onChangeTitle} />
      <br />
      내용: <input type="text" onChange={props.onChangeContents} />
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
