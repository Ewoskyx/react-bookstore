import React from 'react';
import PropTypes from 'prop-types';
import {
  BookDivCenter, Gauage, PercentageSpan, StatusSpan,
} from './BooksStatusElements';

const BooksStatus = ({ percentage, status }) => (
  <>
    <BookDivCenter>
      <Gauage />
      <PercentageSpan>{percentage}</PercentageSpan>
      <StatusSpan>{status}</StatusSpan>
    </BookDivCenter>
  </>
);

export default BooksStatus;

BooksStatus.propTypes = {
  percentage: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
