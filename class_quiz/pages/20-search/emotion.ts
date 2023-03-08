// ----------------------------------------------------------------------------------
//  day 20. search - emotion
// ----------------------------------------------------------------------------------

import styled from "@emotion/styled";

export const PageNumber = styled.span<{ isActive?: boolean }>`
  margin: 10px;
  cursor: pointer;
  :hover {
    color: #3950e5;
  }
`;

export const ContextBox = styled.div`
  /* max-width: 100%; */
  border: 2px solid grey;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
`;

export const TextBox = styled.div`
  display: flex;
  width: 700px;
  height: 25px;
  border-top: 1px solid lightgrey;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const WriterBox = styled.div`
  margin: 10px;
  width: 100px;
  height: 25px;
  justify-content: center;
  border-right: 1px solid lightgrey;
`;

export const ContentsBox = styled.div`
  margin: 10px;
  width: 600;
  height: 25px;
  justify-content: center;
  margin-left: 20px;
`;

export const ListBox = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
`;
