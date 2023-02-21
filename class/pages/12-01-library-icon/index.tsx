// ----------------------------------------------------------------------------------
// ant-Design, Material-UI
// ----------------------------------------------------------------------------------
// 12-01. library-icon
// ----------------------------------------------------------------------------------

import { FormOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

// 아이콘은 그림처럼 보이지만 사실은 폰트이다. (글자)
// 스타일 적용 시 width, height가 아니라 font-size등을 먹여야 함!!!
// 아이콘에 바로 id를 부여하는 것은 불가능
// 다른 태그로 감싸서 거기 id를 부여해야 한다.

const MyIcon = styled(FormOutlined)`
  color: orange;
  font-size: 50px;
`;

export default function LibraryIconPage() {
  return (
    <>
      <FormOutlined />
      <div id="#####">
        <MyIcon />
      </div>
    </>
  );
}
