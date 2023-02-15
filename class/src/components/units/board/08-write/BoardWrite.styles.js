// ----------------------------------------------------------------------------------
// 08. BoardWrite.styles - page의 emotion 부분
// ----------------------------------------------------------------------------------

import styled from "@emotion/styled";

export const RedInput = styled.input`
  border-color: red;
`;

// presenter에서 emotion으로 props 받기
export const BlueButton = styled.button`
  font-size: ${(props) => props.aaa};
  background-color: ${(props) => (props.ccc ? "yellow" : "default")};
`;
