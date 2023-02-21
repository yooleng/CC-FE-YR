// ----------------------------------------------------------------------------------
// ant-Design, Material-UI
// ----------------------------------------------------------------------------------
// 12-01. library-star-2 : setValue 원리 이해
// ----------------------------------------------------------------------------------

import styled from "@emotion/styled";
import { Rate } from "antd";
import { useState } from "react";

const MyStar = styled(Rate)`
  color: orange;
  font-size: 50px;
`;

// 각각의 value가 어떻게 다른지 구분하기!

export default function LibraryIconPage() {
  const [value, setValue] = useState(3);

  const qqq = (thisvalue: number) => {
    setValue(thisvalue); // 여기 value = 위에서 들어온 value (thisvalue)
    setValue(value); // 여기 value = useState의 value (스코프 체인)
  };

  return (
    <>
      {/* 아래 onChange는 라이브러리를 만든 사람들이 자체적으로 만든 것. */}
      {/* event가 아니라 (value: number)를 받음. */}
      {/* 이건 html의 onChange가 아님! 구분하기 */}

      <MyStar onChange={qqq} />

      {/* <MyStar onChange={(value) => setValue(value)} /> */}
      {/* 이렇게 바로 함수 넣기도 가능 */}

      <MyStar onChange={setValue} />
      {/* 그런데 받아온 값과 들어올 값(value)가 같을 때는 생략 가능! 그래서 setValue만 남음 */}
      {/* 즉, 위의 코드는 두 단계가 생략된 것 
        1. 함수를 만들어서 onChange에 바인딩하는 대신 함수 자체를 넣음 
        2. value가 같으므로 생략해서 적음 */}
    </>
  );
}
