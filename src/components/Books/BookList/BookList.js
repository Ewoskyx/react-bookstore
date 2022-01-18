import React from 'react';
import PropTypes from 'prop-types';
import {
  BookDivLeft, Category, Title, Author, ButtonsContainer, BooksButton,
} from './BookListElements';

const BookList = ({ category, title, author }) => (
  <>
    <BookDivLeft>
      <Category>{category}</Category>
      <Title>{title}</Title>
      <Author>{author}</Author>
      <ButtonsContainer>
        <BooksButton className="firstBtn">Comments</BooksButton>
        <BooksButton>Remove</BooksButton>
        <BooksButton className="lastBtn"> Edit</BooksButton>
      </ButtonsContainer>
    </BookDivLeft>
  </>
);

export default BookList;

BookList.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
