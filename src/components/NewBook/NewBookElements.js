import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vh;
  height: 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 400px;
`;
export const Heading = styled.h2`
  opacity: 0.7;
`;
export const Container = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
export const NewInput = styled.input`
  width: 40%;
  height: 60%;
`;
export const CategorySelect = styled.select`
  width: 40%;
  height: 60%;
`;
export const AddButton = styled.button`
  width: 20%;
  height: 60%;
  background-color: #4386bf;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;
