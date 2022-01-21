import { React, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { postToApi } from '../../redux/books/books';
// import BookCategories from './BookCategories';
import {
  Wrapper, Heading, NewInput, AddButton, Container, CategorySelect,
} from './NewBookElements';

const NewBook = () => {
  const [bookData, setBookData] = useState({
    title: '',
    category: '',
  });
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      ...bookData,
      item_id: uuidv4(),
    };

    dispatch(postToApi(newBook));
  };

  const handleChange = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Wrapper>
        <Heading>ADD NEW BOOK</Heading>
        <Container onSubmit={submitBookToStore}>
          <NewInput type="text" name="title" placeholder="Book title" onChange={handleChange} required />
          <CategorySelect name="category" onChange={handleChange} required>
            <option value="" hidden>Category</option>
            <option value="Action and Adventure">Action and Adventure</option>
            <option value="Science Fiction (Sci-Fi)">Science Fiction (Sci-Fi)</option>
            <option value="Biographies and Autobiographies">Biographies and Autobiographies</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Classics">Classics</option>
            <option value="Comic Book or Graphic Novel">Comic Book or Graphic Novel</option>
            <option value="Detective and Mystery">Detective and Mystery</option>
            <option value="Historical Fiction">Historical Fiction</option>
            <option value="Horror">Horror</option>
            <option value="Literary Fiction">Literary Fiction</option>
            <option value="Romance">Romance</option>
            <option value="Suspense and Thrillers">Suspense and Thrillers</option>
            <option value="Women's Fiction">Womens Fiction</option>
            <option value="Cookbooks">Cookbooks</option>
            <option value="Essays">Essays</option>
            <option value="History">History</option>
            <option value="Memoir">Memoir</option>
            <option value="Poetry">Poetry</option>
            <option value="True Crime">True Crime</option>
          </CategorySelect>
          <AddButton type="submit">ADD BOOK</AddButton>
        </Container>
      </Wrapper>
    </>
  );
};

export default NewBook;
