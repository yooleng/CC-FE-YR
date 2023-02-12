// ----------------------------------------------------------------------------------
// day 5 : 페이지 이동과 Router
// ----------------------------------------------------------------------------------
// 1. 다이나믹 라우팅 & 데이터 조회 - routing
// ----------------------------------------------------------------------------------

import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

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

export default function QuizPage5() {
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState(0);

  const [myfunction] = useMutation(CREATE_PRODUCT);

  const router = useRouter();

  const onClickSubmit = async () => {
    try {
      const result = await myfunction({
        variables: {
          seller: seller,
          createProductInput: {
            name: name,
            detail: detail,
            price: price,
          },
        },
      });
      console.log(result);

      // data의 메세지를 alert창에 띄우기
      alert(result.data.createProduct.message);
      console.log("###", result.data.createProduct._id);

      router.push(`/05-2/${result.data.createProduct._id}`);
    } catch (error) {
      console.log("error", error.message);
      alert(error.message);
    }
  };

  const onChangeSeller = (event) => {
    setSeller(event.target.value);
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeDetail = (event) => {
    setDetail(event.target.value);
  };

  const onChangePrice = (event) => {
    setPrice(Number(event.target.value));
  };

  return (
    <>
      판매자: <input type="text" onChange={onChangeSeller} />
      <br />
      상품명: <input type="text" onChange={onChangeName} />
      <br />
      상품내용: <input type="text" onChange={onChangeDetail} />
      <br />
      상품가격: <input type="text" onChange={onChangePrice} />
      <br />
      <button onClick={onClickSubmit}>상품 등록</button>
      <br />
    </>
  );
}
