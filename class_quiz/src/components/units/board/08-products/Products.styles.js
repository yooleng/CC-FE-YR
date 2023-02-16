// ----------------------------------------------------------------------------------
// day 8 ~ 9 : 컴포넌트 재사용성과 수정 프로세스
// ----------------------------------------------------------------------------------
// product.styles - page의 emotion 부분
// ----------------------------------------------------------------------------------

import styled from "@emotion/styled";

export const RedInput = styled.input`
  border-color: red;
`;

// presenter에서 emotion으로 props 받기
export const EButton = styled.button`
  width: 150px;
  height: 30px;
  margin: 20px;
  border: 2px solid gray;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.myColor ? "gainsboro" : "white")};
`;

export const EContentstBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  padding: 20px;
  border: 2px solid gray;
`;

export const ETextBox = styled.div`
  width: 250px;
  height: 30px;
  padding: 10px;
  border: 1px solid gray;
`;

export const EInputBox = styled.div`
  width: 250px;
  height: 30px;
  padding: 10px;
`;
