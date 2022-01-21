import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './books/books';

const reducer = combineReducers({
  booksReducer,
  // additional reducers here
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
