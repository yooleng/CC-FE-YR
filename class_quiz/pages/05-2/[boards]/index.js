// ----------------------------------------------------------------------------------
// day 5 : 페이지 이동과 Router
// ----------------------------------------------------------------------------------
// 1. 다이나믹 라우팅 & 데이터 조회 - routed
// ----------------------------------------------------------------------------------

import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
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

export default function QuizPage6() {
  const router = useRouter();
  console.log("router", router);
  console.log("router.query.boards", router.query.boards);

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.boards,
      // productId는 Number 아님
    },
  });

  console.log("data", data);

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  return (
    <>
      <div>{router.query.name}상품이 등록되었습니다.</div>
      <div>판매자: {data ? data.fetchProduct.seller : "로딩중입니다."}</div>
      <div>상품명: {data ? data.fetchProduct.name : "로딩중입니다."}</div>
      <div>상품내용: {data ? data.fetchProduct.detail : "로딩중입니다."}</div>
      <div>상품가격: {data ? data.fetchProduct.price : "로딩중입니다."}</div>
    </>
  );
}
