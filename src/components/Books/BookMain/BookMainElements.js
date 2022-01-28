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
  color: #fff;
`;

export const Title = styled.span`
  font-family: 'Indie Flower', cursive;
  font-size: 1.6rem;
  font-weight: bold;
  letter-spacing: 0.4px;
  color: #ffffff;
`;

export const BooksButton = styled.button`
  width: 10%;
  border: none;
  border-left: 1px solid #e8e8e8;
  background-color: transparent;
  color: #f0f;
  cursor: pointer;
  text-align: end;

  &.firstBtn {
    border-left: none;
  }

  &.lastBtn {
    text-align: center;
  }
`;
