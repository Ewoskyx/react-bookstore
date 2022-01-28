import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90%;
  height: 100px;
  padding: 12px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const Heading = styled.h2`
  font-family: 'Indie Flower', cursive;
  color: #f0f;
  opacity: 0.7;
`;
export const Container = styled.form`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-top: 24px;
`;
export const NewInput = styled.input`
  width: 70%;
  height: 100%;
  padding: 8px;
  opacity: 0.7;
  font-size:1rem;
  outline-color: #4386bf;
  border: 1px solid #dedede;
  border-radius: 12px;
  `;
export const CategorySelect = styled.select`
  width: 50%;
  height: 100%;
  padding: 8px;
  border-color:#dedede;
  outline-color: #4386bf;
  opacity: 0.7;
  font-size: 1rem;
  border-radius: 12px;
`;
export const AddButton = styled.button`
font-family: 'Mochiy Pop P One', sans-serif;
  width: 30%;
  height: 100%;
  background:linear-gradient(#2196f3, #e91e63);
  color: #ffffff;
  border-radius: 12px;
  cursor: pointer;
  transition: all 5s ease-out;
  &:hover {
    background:linear-gradient(#e91e63, #2196f3);
  }
`;
