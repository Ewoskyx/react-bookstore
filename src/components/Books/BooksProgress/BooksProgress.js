import React from 'react';
import PropTypes from 'prop-types';
import {
  BookDivRight, CurrentChapter, Chapter, UpdateButton,
} from './BooksProgressElements';

const BooksProgress = ({ currentChapter, chapter }) => (
  <>
    <BookDivRight>
      <CurrentChapter>{currentChapter}</CurrentChapter>
      <Chapter>{chapter}</Chapter>
      <UpdateButton>UPDATE PROGRESS</UpdateButton>
    </BookDivRight>
  </>
);

export default BooksProgress;

BooksProgress.propTypes = {
  currentChapter: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
};
