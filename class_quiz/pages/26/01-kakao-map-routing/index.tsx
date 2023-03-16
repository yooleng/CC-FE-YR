// ---------------------------------------------------------------------------------------
//  day 26-01. kakao-map - routing
//  path : http://localhost:3000/26/01-kakao-map-routing
// ---------------------------------------------------------------------------------------

import { useRouter } from "next/router";

export default function KakaoMapPage() {
  const router = useRouter();

  const onClickMoveToMap = () => {
    void router.push("./02-kakao-map-routed");
  };

  return <button onClick={onClickMoveToMap}>지도로 이동하기!</button>;
}
