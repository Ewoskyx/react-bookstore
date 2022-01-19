import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 60%;
  height: 100px;
  padding: 12px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #d1d1d1;
  box-shadow: -2px -2px 0 #ffffff70, 3px 3px 10px #00000070;
`;
export const Heading = styled.h2`
  opacity: 0.7;
`;
export const Container = styled.form`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
export const NewInput = styled.input`
  width: 35%;
  height: 70%;
  padding: 8px;
`;
export const CategorySelect = styled.select`
  width: 40%;
  height: 70%;
  padding: 8px|
`;
export const AddButton = styled.button`
  width: 20%;
  height: 60%;
  background-color: #4386bf;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;
