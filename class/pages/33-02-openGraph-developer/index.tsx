// ----------------------------------------------------------------------------------
//  33-02. openGraph-developer (개발자)
// ----------------------------------------------------------------------------------

import axios from "axios";

// 개발자일 때 (ex. 디스코드)

export default function OpengraphDeveloperPage() {
  const onClickEnter = async () => {
    // 1. 채팅 데이터에 주소가 있는지 찾기(ex. https://~ 로 시작하는 것)

    // 2. 해당 주소로 스크래핑 하기
    // CORS 에러가 발생할 수 있으므로 원래 백에서 함
    axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

    const result = await axios.get("https://www.gmarket.co.kr");
    // const result = await axios.get(
    //   "https://cors-anywhere.herokuapp.com/https://www.gmarket.co.kr"
    // );
    // const result = await axios.get("https://www.koreanjson.com");
    console.log("result", result.data);

    // 3. 메타태그에서 오픈그래프(og: ) 찾기
    console.log(
      result.data.split("<meta").filter((el: string) => el.includes("og :"))
    );
  };

  return (
    <>
      <button onClick={onClickEnter}>채팅 입력 후 엔터 치기!</button>
    </>
  );
}
