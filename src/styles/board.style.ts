import styled from 'styled-components';

export const StBoardWrapper = styled.div`
  width: 1000px;
  height: 330px;

  border: 1px solid black;
`;

export const StBoardItem = styled.div<{ $isHeader: boolean }>`
  display: flex;

  width: 100%;
  height: 30px;

  background: ${({ $isHeader }) => ($isHeader ? 'gray' : 'white')};
`;

export const StBoardField = styled.div<{ $width: string }>`
  width: ${({ $width }) => $width};
  height: 100%;
`;
