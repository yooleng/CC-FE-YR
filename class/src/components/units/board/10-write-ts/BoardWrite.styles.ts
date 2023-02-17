// ----------------------------------------------------------------------------------
// 10. BoardWrite.styles - page의 emotion 부분 - typescript
// ----------------------------------------------------------------------------------

import styled from "@emotion/styled";

export const RedInput = styled.input`
  border-color: red;
`;

// presenter에서 emotion으로 props 받기
// props type 지정해주기

interface IProps {
  aaa: string;
  bbb: string;
  ccc: boolean; // {props.myColor}는 boolean type
  // onClick 은 해줘도 되고 안해줘도 됨 (선택)
}

export const BlueButton = styled.button`
  font-size: ${(props: IProps) => props.aaa};
  background-color: ${(props: IProps) => (props.ccc ? "yellow" : "default")};
`;
