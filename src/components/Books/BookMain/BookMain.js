import React from 'react';
import propTypes from 'prop-types';
import {
  BookDivLeft, Category, Title, ButtonsContainer, BooksButton,
} from './BookMainElements';

const BookMain = ({
  category, title, itemId, removeBookFromStore,
}) => (
  <>
    <BookDivLeft>
      <Category>{category}</Category>
      <Title>{title}</Title>
      <ButtonsContainer>
        <BooksButton className="firstBtn">Comments</BooksButton>
        <BooksButton id={itemId} onClick={removeBookFromStore}>Remove</BooksButton>
        <BooksButton className="lastBtn">Edit</BooksButton>
      </ButtonsContainer>
    </BookDivLeft>
  </>
);

export default BookMain;

BookMain.propTypes = {
  category: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  itemId: propTypes.string.isRequired,
  removeBookFromStore: propTypes.func.isRequired,
};
