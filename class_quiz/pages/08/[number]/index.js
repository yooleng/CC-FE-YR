// ----------------------------------------------------------------------------------
// day 8 ~ 9 : 컴포넌트 재사용성과 수정 프로세스
// ----------------------------------------------------------------------------------
// products - detail (상세 페이지)
// ----------------------------------------------------------------------------------

import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import * as S from "../../../src/components/units/board/08-products/Products.styles";

// 목록 불러오기 (query)
export const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
    }
  }
`;

export default function ProductsDetailPage() {
  const router = useRouter();
  console.log("router", router);
  console.log("router.query.number", router.query.number);

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.number,
      // 마지막 number 폴더명이라고!!!!
    },
    refetchQueries: [{ query: FETCH_PRODUCT }],
  });

  // 수정하러 이동하기 버튼 함수 생성
  const onClickMoveToEdit = () => {
    router.push(`/08/${router.query.number}/edit`);
  };

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  return (
    <>
      <S.EContentstBox>
        <div>"{data?.fetchProduct.name}" 상품이 등록되었습니다.</div>
        <br />
        <S.ETextBox>
          판매자: {data ? data.fetchProduct.seller : "loading"}
        </S.ETextBox>
        <S.ETextBox>
          상품명: {data ? data.fetchProduct.name : "loading"}
        </S.ETextBox>
        <S.ETextBox>
          상품내용: {data ? data.fetchProduct.detail : "loading"}
        </S.ETextBox>
        <S.ETextBox>
          상품가격: {data ? data.fetchProduct.price : "loading"}
        </S.ETextBox>
        <S.EButton onClick={onClickMoveToEdit}>수정하러 이동하기</S.EButton>
      </S.EContentstBox>
    </>
  );
}
