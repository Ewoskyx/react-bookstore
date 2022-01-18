import React from 'react';
import {
  Wrapper, Heading, NewInput, CategorySelect, AddButton, Container,
} from './NewBookElements';

const NewBook = () => (
  <>
    <Wrapper>
      <Heading>ADD NEW BOOK</Heading>
      <Container>
        <NewInput value="" placeholder="Book title" />
        <CategorySelect>
          <option value="default">
            Category
          </option>
        </CategorySelect>
        <AddButton>ADD BOOK</AddButton>
      </Container>
    </Wrapper>
  </>
);

export default NewBook;
