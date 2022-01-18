import React from 'react';
import NewBook from '../NewBook/NewBook';
import {
  BookWrapper, BookDivLeft, BookDivRight,
  BookDivCenter, ButtonsContainer, Gauage, PercentageSpan, StatusSpan,
  Category, Title, Author, BooksButton, CurrentChapter,
  Chapter, UpdateButton,
} from './BooksElements';

const Books = () => (
  <>
    <BookWrapper>
      <BookDivLeft>
        <Category>Action</Category>
        <Title>The Hunger Games</Title>
        <Author>Suzanne Collins</Author>
        <ButtonsContainer>
          <BooksButton className="firstBtn">Comments</BooksButton>
          <BooksButton>Remove</BooksButton>
          <BooksButton className="lastBtn"> Edit</BooksButton>
        </ButtonsContainer>
      </BookDivLeft>
      <BookDivCenter>
        <Gauage />
        <PercentageSpan>64%</PercentageSpan>
        <StatusSpan>Completed</StatusSpan>
      </BookDivCenter>
      <BookDivRight>
        <CurrentChapter>CURRENT CHAPTER</CurrentChapter>
        <Chapter>Chapter 17</Chapter>
        <UpdateButton>UPDATE PROGRESS</UpdateButton>
      </BookDivRight>
    </BookWrapper>
    <NewBook />
  </>
);

export default Books;
