import bookstoreApi from '../../apis/bookstoreApi';
// CONSTANTS
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const CLEAR_BOOK_LIST = 'bookStore/books/CLEAR_BOOK_LIST';
const initialState = [];

// LOCAL ACTIONS
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => (
  {
    type: REMOVE_BOOK,
    payload,
  }
);
export const clearBookList = () => ({ type: CLEAR_BOOK_LIST });

// API ACTIONS
export const fetchBooks = () => async (dispatch) => {
  bookstoreApi.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZUuwM9uzZsLmskKMfcLD/books')
    .then((response) => {
      const books = response.data;
      Object.keys(books).forEach((itemId) => {
        const [book] = books[itemId];
        book.item_id = itemId;
        dispatch(addBook(book));
      });
    });
};

export const postToApi = (book) => (dispatch) => {
  bookstoreApi.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZUuwM9uzZsLmskKMfcLD/books/', book)
    .then(() => {
      dispatch(addBook(book));
    });
};

export const removeFromApi = (id) => (dispatch) => {
  bookstoreApi.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZUuwM9uzZsLmskKMfcLD/books/${id}`)
    .then(() => dispatch(removeBook({ id })));
};

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    case CLEAR_BOOK_LIST:
      return [];
    default:
      return state;
  }
};
export default reducer;
