// ----------------------------------------------------------------------------------
//  28-01. payment
// ----------------------------------------------------------------------------------

import Head from "next/head";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage() {
  const onClickPayment = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp22147572"); // 예: imp00000000a

    IMP.request_pay(
      {
        // param
        pg: "kcp.nice",
        pay_method: "card", // card, vbank 등
        // merchant_uid: "ORD20180131-0000011", // 중복될 시 결제 안됨!
        name: "싱가폴 회전 의자",
        amount: 100,
        buyer_email: "yoorae0721@naver.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/28-01-payment", // 모바일에서는 결제시 결제페이지로 사이트가 이동(주소 변화)
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직
          console.log(rsp);
          // const paymentDate = new Data() // 프론트엔드에서 시간을 만드는 것은 안됨!

          // 결제 관련 데이터를 백엔드에 넘겨주기 => mutation 실행하기
          // createPointTransactionOfLoading
        } else {
          // 결제 실패 시 로직
          alert("결제에 실패했습니다. 다시 시도해주세요!");
        }
      }
    );
  };

  return (
    <>
      <Head>
        <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      </Head>
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
}
