// ----------------------------------------------------------------------------------
// 05-07. dynamic-routing-board-query (동적라우팅)
// ----------------------------------------------------------------------------------

import { useRouter } from "next/router"; // Next(React의 업그레이드 버전)에서 제공

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickMove1 = () => {
    router.push("/05-08-dynamic-routed-board-query/13771");
  };

  const onClickMove2 = () => {
    router.push("/05-08-dynamic-routed-board-query/13774");
  };

  const onClickMove3 = () => {
    router.push("/05-08-dynamic-routed-board-query/13777");
  };

  const onClickMove100 = () => {
    router.push("/05-08-dynamic-routed-board-query/13766");
  };

  return (
    <>
      <button onClick={onClickMove1}>1번 게시글로 이동하기</button>
      <br />
      <button onClick={onClickMove2}>2번 게시글로 이동하기</button>
      <br />
      <button onClick={onClickMove3}>3번 게시글로 이동하기</button>
      <br />
      <button onClick={onClickMove100}>100번 게시글로 이동하기</button>
      <br />
    </>
  );
}
