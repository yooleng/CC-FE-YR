// ----------------------------------------------------------------------------------
// 07. List.queries - graphql query 부분
// ----------------------------------------------------------------------------------

import { gql } from "@apollo/client";

// 목록 불러오기 (query)
export const FETCH_PRODUCTS = gql`
  query fetchProducts {
    fetchProducts {
      _id
      seller
      name
      detail
      price
    }
  }
`;

// 목록 삭제하기 (mutation)
export const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: ID) {
    deleteProduct(productId: $productId) {
      _id
      number
      message
    }
  }
`;
