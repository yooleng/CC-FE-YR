// ----------------------------------------------------------------------------------
// 05-05. static-routing-board-query (정적라우팅)
// ----------------------------------------------------------------------------------

import { useRouter } from "next/router"; // Next(React의 업그레이드 버전)에서 제공

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickMove1 = () => {
    router.push("/05-06-static-routed-board-query/1");
  };

  const onClickMove2 = () => {
    router.push("/05-06-static-routed-board-query/2");
  };

  const onClickMove3 = () => {
    router.push("/05-06-static-routed-board-query/3");
  };

  return (
    <>
      <button onClick={onClickMove1}>1번 게시글로 이동하기</button>
      <br />
      <button onClick={onClickMove2}>2번 게시글로 이동하기</button>
      <br />
      <button onClick={onClickMove3}>3번 게시글로 이동하기</button>
      <br />
    </>
  );
}
