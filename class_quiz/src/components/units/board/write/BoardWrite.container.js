// ----------------------------------------------------------------------------------
// BoardWrite.container - page의 js 로직 부분
// ----------------------------------------------------------------------------------

import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_PRODUCT } from "./BoardWrite.queries";

import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

export default function BoardWrite() {
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

      router.push(`/06/boards/detail/${result.data.createProduct._id}`);
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
    <BoardWriteUI
      onChangeSeller={onChangeSeller}
      onChangeName={onChangeName}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
      onClickSubmit={onClickSubmit}
    />
  );
}
