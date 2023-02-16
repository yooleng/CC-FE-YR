// ----------------------------------------------------------------------------------
// day 8 ~ 9 : 컴포넌트 재사용성과 수정 프로세스
// ----------------------------------------------------------------------------------
// product.presenter - page의 html 부분
// ----------------------------------------------------------------------------------

import * as S from "./Products.styles";

export default function ProductsWriteComponentUI(props) {
  return (
    <>
      <div>### presenter ###</div>

      <S.EContentstBox>
        <S.EInputBox>
          판매자:
          <input
            type="text"
            onChange={props.onChangeSeller}
            defaultValue={props.data?.fetchProduct.seller}
          />
        </S.EInputBox>
        <S.EInputBox>
          상품명:
          <input
            type="text"
            onChange={props.onChangeName}
            defaultValue={props.data?.fetchProduct.name}
          />
        </S.EInputBox>
        <S.EInputBox>
          상품내용:
          <input
            type="text"
            onChange={props.onChangeDetail}
            defaultValue={props.data?.fetchProduct.detail}
          />
        </S.EInputBox>
        <S.EInputBox>
          상품가격:
          <input
            type="text"
            onChange={props.onChangePrice}
            defaultValue={props.data?.fetchProduct.price}
          />
        </S.EInputBox>

        {/* presenter에서 emotion으로 props 던지기 */}
        <S.EButton
          myColor={props.myColor}
          // 바인딩 로직 변경 (등록하기/수정하기 조건 추가)
          onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
        >
          {props.isEdit ? "상품 수정하기" : "상품 등록하기"}
        </S.EButton>
      </S.EContentstBox>
    </>
  );
}
