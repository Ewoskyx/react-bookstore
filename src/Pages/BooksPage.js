import React from 'react';
import Books from '../components/Books/Books';
import NewBook from '../components/NewBook/NewBook';
import PageSection from './BooksPageElements';

const BooksPage = () => (
  <PageSection>
    <Books />
    <NewBook />
  </PageSection>
);

export default BooksPage;
