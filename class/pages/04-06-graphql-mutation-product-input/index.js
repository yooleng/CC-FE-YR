// ----------------------------------------------------------------------------------
// 04-06. graphql-mutation-product-input
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
  // 변수를 state에 저장하기
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState(0);

  const [myfunction] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await myfunction({
      variables: {
        seller: seller,
        createProductInput: {
          // createProductInput이 안에 또다른 객체를 가지는 것이므로 $ 필요없음
          name: name,
          detail: detail,
          price: Number(price),
        },
      },
    });
    console.log(result);

    // data의 메세지를 alert창에 띄우기
    alert(result.data.createProduct.message);
  };

  // 화살표 함수로 이벤트 핸들러 함수 작성 후 html에 바인딩
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
    setPrice(event.target.value);
    // setPrice(Number(event.target.value));
    // 가격은 Int이므로 형변환 필수! 위에서 안하면 여기서 해도 됨
  };

  return (
    <>
      판매자: <input type="text" onChange={onChangeSeller} />
      <br />
      상품명: <input type="text" onChange={onChangeName} />
      <br />
      상품 상세설명: <input type="text" onChange={onChangeDetail} />
      <br />
      가격: <input type="number" onChange={onChangePrice} />
      <br />
      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
    </>
  );
}
