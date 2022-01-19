import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BooksStatus from './BooksStatus/BooksStatus';
import BooksProgress from './BooksProgress/BooksProgress';
import { removeBook } from '../../redux/books/books';
import {
  BookDivLeft, Category, Title, Author, ButtonsContainer, BooksButton, BookWrapper,
} from './BooksElements';

const Books = () => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.booksReducer);

  const removeBookFromStore = (e) => {
    const bookId = e.target.id;
    dispatch(removeBook(bookId));
  };
  const renderBooks = bookList.map((book) => {
    const {
      id, title, author, category,
    } = book;
    return (
      <BookWrapper key={id}>
        <BookDivLeft>
          <Category>{category}</Category>
          <Title>{title}</Title>
          <Author>{author}</Author>
          <ButtonsContainer>
            <BooksButton className="firstBtn">Comments</BooksButton>
            <BooksButton id={id} onClick={removeBookFromStore}>Remove</BooksButton>
            <BooksButton className="lastBtn"> Edit</BooksButton>
          </ButtonsContainer>
        </BookDivLeft>
        <BooksStatus percentage={`${Math.floor(Math.random() * 100).toString()}%`} status="Completed" />
        <BooksProgress currentChapter="CURRENT CHAPTER" chapter={`CHAPTER ${Math.floor(Math.random() * 30).toString()}`} />
      </BookWrapper>
    );
  });

  return (
    <>{renderBooks}</>
  );
};

export default Books;
