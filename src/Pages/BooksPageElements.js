import styled from 'styled-components';

export const PageSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: 12px;
  &:before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#f00, #f0f);
    clip-path: circle(18% at right 64%);
    z-index: -1;
  }
  &:after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#2196f3, #e91e63);
    clip-path: circle(10% at right 65%);
    z-index: -1;
  }
`;

export const Linespan = styled.span`
  border-bottom: 1px solid #dedede;
  width: 89%;
  margin-top: 24px;
`;
