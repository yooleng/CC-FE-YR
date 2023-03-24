// ----------------------------------------------------------------------------------
//  32-05. image-preload
// ----------------------------------------------------------------------------------

import { useRouter } from "next/router";
import { useEffect } from "react";
import { preloadImage } from "../../src/commons/libraries/preloadImage";

// 전역변수로 이미지 모아두기
const PRELOAD_IMAGES = [
  "https://upload.wikimedia.org/wikipedia/commons/9/96/%22Den_kjekke_gutt%22_-_6._Internasjonale_Akademiske_Vinterleker_%281939%29_%2840200856483%29.jpg",
];

export default function ImagePreloadPage() {
  const router = useRouter();

  useEffect(() => {
    preloadImage(PRELOAD_IMAGES); // 파일분리 : import 해서 사용
  }, []);

  const onClickMove = () => {
    void router.push("/32-06-image-preload-moved");
  };

  return <button onClick={onClickMove}>페이지 이동하기</button>;
}
