import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookMain from './BookMain/BookMain';
import BooksStatus from './BooksStatus/BooksStatus';
import BooksProgress from './BooksProgress/BooksProgress';
import {
  fetchBooks, removeFromApi, clearBookList, removeBook,
}
  from '../../redux/books/books';
import BookWrapper from './BooksElements';

const Books = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
    return () => {
      dispatch(clearBookList());
    };
  }, []);

  const removeBookFromStore = (e) => {
    const bookId = e.target.id;
    dispatch(removeFromApi(bookId));
    dispatch(removeBook(bookId));
  };
  const books = useSelector((state) => state.booksReducer);
  const renderBooks = books.map((book) => (

    <BookWrapper key={book.item_id}>
      <BookMain
        title={book.title}
        itemId={book.item_id}
        category={book.category}
        removeBookFromStore={removeBookFromStore}
      />
      <BooksStatus percentage={`${Math.floor(Math.random() * 100).toString()}%`} status="Completed" />
      <BooksProgress currentChapter="CURRENT CHAPTER" chapter={`CHAPTER ${Math.floor(Math.random() * 20).toString()}`} />
    </BookWrapper>
  ));

  return (
    <>{renderBooks}</>
  );
};

export default Books;
