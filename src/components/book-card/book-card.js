import React from 'react';
import PropTypes from 'prop-types';
import BookInfo from '../book-info/book-info';
import BookProgress from '../book-progress/book-progress';
import './book-card.css';

export default function BookCard(props) {
  const {
    id, percent, chapter, genre, title, author,
  } = props;
  return (
    <section className="book-card fix-margin flex justify-between rounded-sm p-12 mx-8 my-4 shadow-md">
      <BookInfo
        id={id}
        genre={genre}
        title={title}
        author={author}
      />
      <BookProgress percent={percent} chapter={chapter} />
    </section>
  );
}

BookCard.propTypes = {
  id: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
  chapter: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
