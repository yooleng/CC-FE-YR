// ----------------------------------------------------------------------------------
// day 8 ~ 9 : 컴포넌트 재사용성과 수정 프로세스
// ----------------------------------------------------------------------------------
// product.container - page의 js 로직 부분
// ----------------------------------------------------------------------------------

import ProductsWriteComponentUI from "./Products.presenter";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./Products.queries";

import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

export default function ProductsWriteComponent(props) {
  // 변수를 state에 저장하기
  const router = useRouter();

  const [myColor, setMycolor] = useState(false);
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState(0);

  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);

  // 등록하기
  const onClickSubmit = async () => {
    try {
      const result = await createProduct({
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

      // router 추가
      router.push(`/08/${result.data.createProduct._id}`);
    } catch (error) {
      console.log("error", error.message);
      alert(error.message);
    }
  };

  // 수정하기
  const onClickUpdate = async () => {
    try {
      // 변경된 값만 백엔드에 보내주기 위한 코드
      // 빈 값을 생성하고 바뀐 값만 if문으로 처리
      const myvariables = {
        productId: router.query.number,
        updateProductInput: {},
      };
      if (name) myvariables.updateProductInput.name = name;
      if (detail) myvariables.updateProductInput.detail = detail;
      if (price) myvariables.updateProductInput.price = price;

      // 1. 수정하기 mutation 날리기
      const result = await updateProduct({
        variables: myvariables,
      });

      // 2. 수정하고 상세페이지로 이동하기
      console.log("result", result);
      console.log("myvariables", myvariables);
      alert(result.data.updateProduct.message);
      router.push(`/08/${result.data.updateProduct._id}`);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  // 화살표 함수로 이벤트 핸들러 함수 작성 후 html에 바인딩
  const onChangeSeller = (event) => {
    setSeller(event.target.value);
    if (event.target.value && name && detail && price) {
      setMycolor(true);
    }
  };

  const onChangeName = (event) => {
    setName(event.target.value);
    if (seller && event.target.value && detail && price) {
      setMycolor(true);
    }
  };

  const onChangeDetail = (event) => {
    setDetail(event.target.value);
    if (seller && name && event.target.value && price) {
      setMycolor(true);
    }
  };

  const onChangePrice = (event) => {
    setPrice(Number(event.target.value));
    if (seller && name && detail && event.target.value) {
      setMycolor(true);
    }
  };

  return (
    <>
      <div>### container ###</div>
      <ProductsWriteComponentUI
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        onChangeSeller={onChangeSeller}
        onChangeName={onChangeName}
        onChangeDetail={onChangeDetail}
        onChangePrice={onChangePrice}
        myColor={myColor}
        isEdit={props.isEdit}
        // edit page에서 받은 data 한 번 더 props로 보내주기
        data={props.data}
      />
    </>
  );
}
