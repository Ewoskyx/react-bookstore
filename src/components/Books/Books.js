import React from 'react';
import BookList from './BookList/BookList';
import BooksStatus from './BooksStatus/BooksStatus';
import BooksProgress from './BooksProgress/BooksProgress';
import BookWrapper from './BooksElements';

const Books = () => (
  <>
    <BookWrapper>
      <BookList
        category="Action"
        title="The Hunger Games"
        author="Suzanne Collins"
      />
      <BooksStatus percentage="64%" status="Completed" />
      <BooksProgress currentChapter="CURRENT CHAPTER" chapter="CHAPTER 17" />
    </BookWrapper>
  </>
);

export default Books;
