import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../../redux/books/books';
import BookCard from '../../components/book-card/book-card';
import Form from '../../components/form/from';

export default function Books() {
  const books = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const bookList = Object.keys(books.bookList).map((id) => {
    const book = books.bookList[id];
    const { category: genre, title, author } = book[0];
    return (
      <BookCard
        key={id}
        id={id}
        chapter="Chapter 0"
        percent={0}
        genre={genre}
        title={title}
        author={author}
      />
    );
  });

  if (!bookList.length) {
    return (
      <main className="flex flex-col mb-24 bg-[#fafafa]">
        <section className="book-card flex justify-center items-center rounded-sm p-12 mx-8 my-4 shadow-md h-48">
          <div className="text-3xl font-bold">
            Please add more books
          </div>
        </section>
        <Form />
      </main>
    );
  }
  return (
    <main className="flex flex-col mb-24 bg-[#fafafa]">
      {bookList}
      <Form />
    </main>
  );
}
