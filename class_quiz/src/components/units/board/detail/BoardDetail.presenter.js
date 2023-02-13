// ----------------------------------------------------------------------------------
// BoardDetail.presenter - page의 html 부분
// ----------------------------------------------------------------------------------

import * as S from "./BoardDetail.styles";

export default function BoardDetailUI(props) {
  // javascript 영역

  return (
    // html 영역
    <>
      <S.EContentstBox>
        <div>"{props.data?.fetchProduct.name}" 상품이 등록되었습니다.</div>
        <br />
        <S.ETextBox>
          판매자:
          {props.data ? props.data.fetchProduct.seller : "로딩중입니다."}
        </S.ETextBox>
        <S.ETextBox>
          상품명: {props.data ? props.data.fetchProduct.name : "로딩중입니다."}
        </S.ETextBox>
        <S.ETextBox>
          상품내용:
          {props.data ? props.data.fetchProduct.detail : "로딩중입니다."}
        </S.ETextBox>
        <S.ETextBox>
          상품가격:
          {props.data ? props.data.fetchProduct.price : "로딩중입니다."}
        </S.ETextBox>
      </S.EContentstBox>
    </>
  );
}
