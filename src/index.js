import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Navbar from './components/Navbar/Navbar';
import BooksPage from './Pages/BooksPage';
import Categories from './components/Categories/Categories';
import './index.css';

render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<BooksPage />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root'),
);
