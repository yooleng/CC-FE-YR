// ----------------------------------------------------------------------------------
// BoardDetail.queries - graphql query 부분
// ----------------------------------------------------------------------------------

import { gql } from "@apollo/client";

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
