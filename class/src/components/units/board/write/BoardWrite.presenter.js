// ----------------------------------------------------------------------------------
// BoardWrite.presenter - page의 html 부분
// ----------------------------------------------------------------------------------

// export default와 export를 한 번에 사용하는 방법
import * as S from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  // javascript 영역
  // console.log("#### props", props.aaa);

  return (
    // html 영역
    <>
      <div>### presenter ###</div>
      작성자: <S.RedInput type="text" onChange={props.onChangeWriterProps} />
      <br />
      제목: <input type="text" onChange={props.onChangeTitleProps} />
      <br />
      내용: <input type="text" onChange={props.onChangeContentsProps} />
      <br />
      <S.BlueButton onClick={props.onClickSubmitProps}>
        GRAPHQL-API(동기) 요청하기
      </S.BlueButton>
    </>
  );
}
