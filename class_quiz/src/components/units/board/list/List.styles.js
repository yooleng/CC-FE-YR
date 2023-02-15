// ----------------------------------------------------------------------------------
// 07. List.styles - page의 emotion 부분
// ----------------------------------------------------------------------------------

import styled from "@emotion/styled";

export const Row = styled.div`
  display: flex;
`;

export const Column = styled.div`
  /* width: ${(props) => props.w};
  background-color: ${(props) => props.c}; */
  width: 20%;
  margin-bottom: 10px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0 30px 0;
`;

export const HeaderTitle = styled.div`
  text-align: start;
  font-weight: bold;
  width: 20%;
`;

export const HeaderCheckBox = styled.div`
  width: 5%;
`;

export const Invisible = styled.div`
  opacity: 0;
  width: 5%;
`;

export const HeaderDelete = styled.div`
  opacity: 0;
`;

export const DeleteButton = styled.div`
  // presenter에서 emotion으로 props 받기
  border: ${(props) => (props.c ? "1px solid gray" : "1px solid black")};
  /* border: 1px solid ${(props) => props.c}; */
  border-radius: 5px;
  padding: 5px;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px;
  cursor: pointer;
`;
