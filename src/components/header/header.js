import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

export default function Header() {
  return (
    <header className="flex justify-between p-6 w-full shadow-md">
      <nav className="flex gap-6">
        <Link to="/">
          <h1 className="h-full flex items-center text-3xl text-sky-700">
            Bookstore CMS
          </h1>
        </Link>
        <Link to="/">
          <span className="h-full text-xl flex items-center">
            BOOKS
          </span>
        </Link>
        <Link to="/categories">
          <span className="h-full text-xl flex items-center">
            CATEGORIES
          </span>
        </Link>
      </nav>
      <button
        type="button"
        className="h-full text-3xl flex items-center p-3 text-sky-700 rounded-full border-2 border-gray-300"
      >
        <ImUser />
      </button>
    </header>
  );
}
