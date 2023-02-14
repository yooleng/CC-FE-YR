// ----------------------------------------------------------------------------------
// 07. BoardWrite.presenter - page의 html 부분
// ----------------------------------------------------------------------------------

// export default와 export를 한 번에 사용하는 방법
import * as S from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <>
      <div>### presenter ###</div>
      작성자: <S.RedInput type="text" onChange={props.onChangeWriterProps} />
      <br />
      제목: <input type="text" onChange={props.onChangeTitleProps} />
      <br />
      내용: <input type="text" onChange={props.onChangeContentsProps} />
      <br />
      {/* presenter에서 emotion으로 props 던지기 */}
      <S.BlueButton
        aaa="15px"
        bbb="yellow"
        ccc={props.myColor}
        onClick={props.onClickSubmitProps}
      >
        GRAPHQL-API(동기) 요청하기
      </S.BlueButton>
    </>
  );
}
