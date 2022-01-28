import styled from 'styled-components';

const BookWrapper = styled.div`
  width: 75rem;
  height: 10.6rem;
  background-color: rgba(255,255,255,0.1);
  box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
  border-radius: 15px;
  border-top: 1px solid rgba(255,255,255,0.5);
  border-left: 1px solid rgba(255,255,255,0.5);
  overflow: hidden;
  backdrop-filter: blur(5px);
  display: flex;
  padding: 2rem 4rem 1rem 1rem;
  margin: 2rem 6rem 0;
`;

export default BookWrapper;
