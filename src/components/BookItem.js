import React from 'react';
import PropTypes from 'prop-types';

const BookItem = (props) => {
  const { removeBookProps, bookProps } = props;

  return (
    <li key={bookProps.id}>
      <p>{bookProps.author}</p>
      <p>{bookProps.title}</p>
      <button type="button" onClick={() => removeBookProps(bookProps.id)}>
        Remove
      </button>
    </li>
  );
};

BookItem.propTypes = {
  bookProps: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
  removeBookProps: PropTypes.func.isRequired,
};

export default BookItem;
