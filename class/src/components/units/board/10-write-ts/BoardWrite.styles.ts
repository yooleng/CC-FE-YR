// ----------------------------------------------------------------------------------
// 10. BoardWrite.styles - page의 emotion 부분 - typescript
// ----------------------------------------------------------------------------------

import styled from "@emotion/styled";
import { IBlueButtonProps } from "./BoardWrite.types";

export const RedInput = styled.input`
  border-color: red;
`;

// presenter에서 emotion으로 props 받기
// props type 지정해주기

export const BlueButton = styled.button`
  font-size: ${(props: IBlueButtonProps) => props.aaa};
  background-color: ${(props: IBlueButtonProps) =>
    props.ccc ? "yellow" : "default"};
`;
