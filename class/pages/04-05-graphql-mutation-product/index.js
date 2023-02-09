// ----------------------------------------------------------------------------------
// 04-05. graphql-mutation-product
// ----------------------------------------------------------------------------------
import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";
import { useState } from "react";

// createProduct
// 아래 변수의 타입은 playground를 보고 똑같이 맞춰주어야 한다.

const CREATE_PRODUCT = gql`
  mutation createProduct(
    # 변수의 타입을 적는 곳
    $seller: String
    $createProductInput: CreateProductInput! # 반드시 작성해야 하는 것 : ! (!까지 꼭 적어주어야 한다.)
  ) {
    # 실제 우리가 전달할 변수 적는 곳
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
        seller: "판매자베니",
        createProductInput: {
          // createProductInput이 안에 또다른 객체를 가지는 것이므로 $ 필요없음
          name: "로지텍 키보드",
          detail: "무소음 키보드입니다.",
          price: 160000,
        },
      },
    });
    console.log(result);

    // data의 메세지를 alert창에 띄우기
    alert(result.data.createProduct.message);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>;
}
