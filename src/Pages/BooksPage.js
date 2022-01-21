import React from 'react';
import Books from '../components/Books/Books';
import NewBook from '../components/NewBook/NewBook';
import { PageSection, Linespan } from './BooksPageElements';

const BooksPage = () => (
  <PageSection>
    <Books />
    <Linespan />
    <NewBook />
  </PageSection>
);

export default BooksPage;
