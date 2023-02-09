// ----------------------------------------------------------------------------------
// GRAPHQL-API 요청하기 - CREATE_PRODUCT
// ----------------------------------------------------------------------------------
import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";
import { useState } from "react";

// createProduct

const CREATE_PRODUCT = gql`
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

export default function GraphqlMutationPage() {
  const [myfunction] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await myfunction({
      variables: {
        seller: "퀴즈푸는판매자베니",
        createProductInput: {
          name: "맥북 pro",
          detail: "14인치, RAM 16G",
          price: 3000000,
        },
      },
    });
    console.log(result);

    // data의 메세지를 alert창에 띄우기
    alert(result.data.createProduct.message);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>;
}
