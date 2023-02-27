// ----------------------------------------------------------------------------------
// day 15. infinite-scroller - emotion
// ----------------------------------------------------------------------------------

import styled from "@emotion/styled";

export const ScrollBox = styled.div`
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
  width: 100px;
  height: 25px;
  justify-content: center;
  border-right: 1px solid lightgrey;
`;

export const ContentsBox = styled.div`
  width: 600;
  height: 25px;
  justify-content: center;
  margin-left: 50px;
`;
