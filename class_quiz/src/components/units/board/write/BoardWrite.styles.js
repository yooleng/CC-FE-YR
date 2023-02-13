// ----------------------------------------------------------------------------------
// BoardWrite.styles - page의 emotion 부분
// ----------------------------------------------------------------------------------

import styled from "@emotion/styled";

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

export const EInputBox = styled.div`
  width: 250px;
  height: 30px;
  padding: 10px;
`;

export const EButton = styled.button`
  width: 100px;
  height: 30px;
  margin: 20px;
  border: 2px solid gray;
  border-radius: 5px; ;
`;
