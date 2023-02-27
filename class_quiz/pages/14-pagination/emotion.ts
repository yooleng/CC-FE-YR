// ----------------------------------------------------------------------------------
// day 14. pagination - emotion
// ----------------------------------------------------------------------------------

import styled from "@emotion/styled";

export const PageNumber = styled.span<{ isActive?: boolean }>`
  margin: 15px;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? "#3950e5" : "black")};
`;

export const BeforeAfterButton = styled.span`
  cursor: pointer;
`;

export const ContextBox = styled.div`
  /* max-width: 100%; */
  border: 2px solid grey;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
`;

export const ListBox = styled.div`
  margin-bottom: 20px;
`;
