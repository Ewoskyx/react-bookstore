import styled from 'styled-components';

export const BookDivLeft = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2px;
`;

export const ButtonsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 0.8rem;
  gap: 8px; 
`;

export const Category = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  opacity: 0.5;
  color: #121212;
`;

export const Title = styled.span`
  font-family: "Roboto Slab", serif;
  font-size: 1.6rem;
  font-weight: bold;
  letter-spacing: 0.4px;
`;

export const Author = styled.span`
  color: #4386bf;
  font-family: "Roboto Slab", serif;
  font-size: 1rem;
  font-weight: normal;
  letter-spacing: 0.4px;
`;

export const BooksButton = styled.button`
  width: 10%;
  border: none;
  border-left: 1px solid #e8e8e8;
  background-color: transparent;
  color: #4386bf;
  cursor: pointer;
  text-align: end;

  &.firstBtn {
    border-left: none;
  }

  &.lastBtn {
    text-align: center;
  }
`;
