// ----------------------------------------------------------------------------------
// day 8 : 컴포넌트 재사용성과 수정 프로세스
// ----------------------------------------------------------------------------------
// product.queries - graphql query 부분
// ----------------------------------------------------------------------------------

import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $productId: ID
    $updateProductInput: UpdateProductInput!
  ) {
    updateProduct(
      productId: $productId
      updateProductInput: $updateProductInput
    ) {
      _id
      message
    }
  }
`;

// Q. UPDATE_PRODUCT 쿼리문 질문
// docs를 보면, UpdateProductInput가 하나의 타입이고, name, detail, price 세 개의 필드를 갖는다고 나와있는데,
// 아래처럼 써도 되는건지 궁금합니다.

// + updateProduct 이후 "상품이 정상적으로 수정되었습니다."라는 message만 뜨고
// 나머지 데이터가 모두 null값으로 반환되는데, 이 오류를 해결하지 못했습니다.
// 어디를 수정해야 할까요...

// -----------------------------------------

// export const UPDATE_PRODUCT = gql`
//   mutation updateProduct(
//     $productId: ID
//     $name: String
//     $detail: String
//     $price: Int
//   ) {
//     updateProduct(
//       productId: $productId
//       updateProductInput: { name: $name, detail: $detail, price: $price }
//     ) {
//       _id
//       number
//       message
//     }
//   }
// `;
