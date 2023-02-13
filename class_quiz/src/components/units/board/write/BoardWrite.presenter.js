// ----------------------------------------------------------------------------------
// BoardWrite.presenter - page의 html 부분
// ----------------------------------------------------------------------------------

import * as S from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  // javascript 영역

  return (
    // html 영역
    <>
      <S.EContentstBox>
        <S.EInputBox>
          판매자: <input type="text" onChange={props.onChangeSeller} />
        </S.EInputBox>
        <S.EInputBox>
          상품명: <input type="text" onChange={props.onChangeName} />
        </S.EInputBox>
        <S.EInputBox>
          상품내용: <input type="text" onChange={props.onChangeDetail} />
        </S.EInputBox>
        <S.EInputBox>
          상품가격: <input type="text" onChange={props.onChangePrice} />
        </S.EInputBox>
        <S.EButton onClick={props.onClickSubmit}>상품 등록</S.EButton>
      </S.EContentstBox>
    </>
  );
}
