// ----------------------------------------------------------------------------------
// 16-05. openapi-with-useEffect
// ----------------------------------------------------------------------------------

import axios from "axios";
import { useEffect, useState } from "react";

export default function openapiWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    const fetchDog = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random"); // open-api 요청하는 주소
      setDogUrl(result.data.message); // 이미지 주소 (message인 이유는 docs에 그렇게 나와있기 때문)
      // 이미지 주소를 setDogUrl에 저장
    };
    void fetchDog();
  }, []);
  // componentDidMount처럼 dependency array(의존성 배열)가 비어있어야 함

  return <img src={dogUrl} />;
}
