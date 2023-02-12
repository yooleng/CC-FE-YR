// ----------------------------------------------------------------------------------
// 05-01. static-routing
// ----------------------------------------------------------------------------------

import { useRouter } from "next/router"; // Next(React의 업그레이드 버전)에서 제공

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/05-02-static-routed");
  };

  return <button onClick={onClickMove}>페이지 이동하기</button>;
}
