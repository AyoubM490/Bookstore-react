import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../redux/books/books';

export default function BookInfo(props) {
  const {
    genre, title, author, id,
  } = props;
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="flex flex-col gap-6 justify-between items-start w-72 ">
      <div className="flex flex-col gap-0">
        <span className="font-bold text-sm text-gray-500">
          {genre}
        </span>
        <h3 className=" text-2xl font-bold">{title}</h3>
        <span className=" text-lg font-light text-sky-600">
          {author}
        </span>
      </div>
      <div className="flex gap-2 justify-center items-center text-gray-300">
        <button
          type="button"
          className="text-sky-600 cursor-pointer"
        >
          Comments
        </button>
        <span>|</span>
        <button
          className="text-sky-600 cursor-pointer"
          type="button"
          onClick={handleRemove}
        >
          Remove
        </button>
        <span>|</span>
        <button
          type="button"
          className="text-sky-600 cursor-pointer"
        >
          Edit
        </button>
      </div>
    </div>
  );
}

BookInfo.propTypes = {
  id: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
