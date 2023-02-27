// ----------------------------------------------------------------------------------
// day 16. 3-open-api (axios로 rest기반 open-api 사용하기)
// ----------------------------------------------------------------------------------

import axios from "axios";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

export default function openapiWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    const fetchDog = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
    };
    void fetchDog();
  }, []);

  return (
    <>
      <PictureBox>
        <img src={dogUrl} />
      </PictureBox>
    </>
  );
}

export const PictureBox = styled.div`
  display: flex;
  justify-content: center;
  border: 2px solid #1b1b1b7e;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  img {
    max-width: 100%;
    height: 455px;
    object-fit: contain;
  }
`;
