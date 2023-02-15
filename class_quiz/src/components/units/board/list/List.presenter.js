// ----------------------------------------------------------------------------------
// 07. List.presenter -page의 html 부분
// ----------------------------------------------------------------------------------

import * as S from "./List.styles";

export default function ListUI(props) {
  return (
    <>
      <S.Header>
        <S.Invisible>체크박스</S.Invisible>
        <S.HeaderTitle>판매자</S.HeaderTitle>
        <S.HeaderTitle>상품명</S.HeaderTitle>
        <S.HeaderTitle>제품상세</S.HeaderTitle>
        <S.HeaderTitle>가격</S.HeaderTitle>
        <S.HeaderDelete>
          <button>삭제</button>
        </S.HeaderDelete>
      </S.Header>

      {props.data?.fetchProducts.map((el) => (
        <S.Row key={el._id}>
          <S.HeaderCheckBox>
            <input type="checkBox" />
          </S.HeaderCheckBox>
          <S.Column>{el.seller} </S.Column>
          <S.Column>{el.name}</S.Column>
          <S.Column>{el.detail} </S.Column>
          <S.Column>{el.price}</S.Column>

          {/* presenter에서 emotion으로 props 던지기 */}
          <S.DeleteButton c="grey" id={el._id} onClick={props.onClickDelete}>
            삭제
          </S.DeleteButton>
        </S.Row>
      ))}
    </>
  );
}
