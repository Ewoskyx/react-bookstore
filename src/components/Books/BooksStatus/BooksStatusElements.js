import styled from 'styled-components';

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
