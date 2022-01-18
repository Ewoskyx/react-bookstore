import styled from 'styled-components';

export const BookWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@600&display=swap");
  width: 75rem;
  height: 10.6rem;
  background-color: #ffffff;
  border: 1px solid #e8e8e8;
  display: flex;
  padding: 2rem 4rem 1rem 1rem;
  margin: 2rem 6rem 0;
`;

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

export const BookDivCenter = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "gauage percentage ."
    "gauage text ."
    ". . .";
`;

export const BookDivRight = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;

export const Gauage = styled.div`
  grid-area: gauage;
  width: 5rem;
  height: 5rem;
  border: 6px solid #4386bf;
  border-radius: 50%;
  border-left-color: darkgray;
  transform: rotate(45deg);
  padding:12px;
`;

export const PercentageSpan = styled.span`
  grid-area: percentage;
  padding:0 12px;
  font-size: 2rem;
`;

export const StatusSpan = styled.span`
  grid-area: text;
  padding:0 12px;
  opacity: 0.5;
  font-size: 1rem;
  text-align:center;
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

export const CurrentChapter = styled.span`
    font-size: 0.8rem;
    opacity: 0.5;
    font-family: font-family: "Roboto Slab", serif;
    letter-spacing: 0.4px;

`;

export const Chapter = styled.span`
    font-size: 1rem;
    font-family: font-family: "Roboto Slab", serif;
    letter-spacing: 0.4px;

`;

export const UpdateButton = styled.button`
  width: 50%;
  justify-self: flex-end;
  background-color: #0290ff;
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
