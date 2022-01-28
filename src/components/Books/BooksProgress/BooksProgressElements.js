import styled from 'styled-components';

export const BookDivRight = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;

export const CurrentChapter = styled.span`
    font-size: 0.8rem;
    opacity: 0.5;
    font-family: font-family: "Roboto Slab", serif;
    letter-spacing: 0.4px;
    color: #ffffff;
`;

export const Chapter = styled.span`
    font-size: 1rem;
    font-family: font-family: "Roboto Slab", serif;
    letter-spacing: 0.4px;
    color: #ffffff;

`;

export const UpdateButton = styled.button`
  width: 50%;
  justify-self: flex-end;
  background:linear-gradient(#2196f3, #e91e63);
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 100;
  opacity: 0.9;
  border: none;
  padding: 8px;
  font-family: "Roboto Slab", serif;
  letter-spacing: 0.9px;
  cursor: pointer;
`;
