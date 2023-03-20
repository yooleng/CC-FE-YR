// ----------------------------------------------------------------------------------
//  day 28. payment - loading
//  path : http://localhost:3000/28/payment/loading
// ----------------------------------------------------------------------------------

import Head from "next/head";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { Checkbox } from "antd";
import { useState } from "react";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentLoadingPage() {
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState();

  const onChangeCheckbox = (event: any) => {
    setSelectedValue(event.target.checked ? event.target.value : undefined);
  };

  const onClickPayment = () => {
    const amount = Number(selectedValue); // 선택된 금액을 숫자로 변환
    if (!amount) {
      // 선택된 금액이 없으면 alert 출력 후 함수 종료
      Modal.error({ content: "결제 금액을 선택해주세요." });
      return;
    }

    const IMP = window.IMP; // 생략 가능
    IMP.init("imp22147572"); // 예: imp00000000a

    IMP.request_pay(
      {
        // param
        pg: "kcp.nice",
        pay_method: "card",
        name: "에어팟 프로2",
        amount,
        buyer_email: "yoorae0721@naver.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/28/payment/login",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직
          console.log(rsp);
          router.push("/28/payment/complete");
        } else {
          // 결제 실패 시 로직
          alert("결제에 실패했습니다. 다시 시도해주세요!");
        }
      }
    );
  };

  return (
    <>
      <Checkbox value="500" onChange={onChangeCheckbox}>
        500원
      </Checkbox>
      <Checkbox value="1000" onChange={onChangeCheckbox}>
        1000원
      </Checkbox>
      <Checkbox value="2000" onChange={onChangeCheckbox}>
        2000원
      </Checkbox>
      <Checkbox value="5000" onChange={onChangeCheckbox}>
        5000원
      </Checkbox>

      {/* <label>
        <input
          type="checkbox"
          name="payment"
          value="500"
          checked={selectedValue === "500"}
          onChange={onChangeCheckbox}
        />
        500원
      </label>
      <label>
        <input
          type="checkbox"
          name="payment"
          value="1000"
          checked={selectedValue === "1000"}
          onChange={onChangeCheckbox}
        />
        1000원
      </label>
      <label>
        <input
          type="checkbox"
          name="payment"
          value="2000"
          checked={selectedValue === "2000"}
          onChange={onChangeCheckbox}
        />
        2000원
      </label>
      <label>
        <input
          type="checkbox"
          name="payment"
          value="5000"
          checked={selectedValue === "5000"}
          onChange={onChangeCheckbox}
        />
        5000원
      </label> */}
      <Head>
        <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      </Head>
      <button onClick={onClickPayment}>충전하기</button>
    </>
  );
}
