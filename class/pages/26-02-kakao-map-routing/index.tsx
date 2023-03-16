// ---------------------------------------------------------------------------------------
//  26-02. kakao-map-routing
// ---------------------------------------------------------------------------------------

import { useRouter } from "next/router";
import Link from "next/link";

export default function KakaoMapPage() {
  const router = useRouter();

  const onClickMoveToMap = () => {
    void router.push("/26-03-kakao-map-routed");
  };

  return (
    <>
      <button onClick={onClickMoveToMap}>지도로 이동하기!</button>;
      <a href="/26-03-kakao-map-routed">지도로 이동하기!!</a>
      {/* <Link href="/26-03-kak/ao-map-routed">지도로 이동하기!!!</Link> */}
      <Link href="/26-03-kakao-map-routed">
        <a>지도로 이동하기!!!</a>
      </Link>
    </>
  );
}
