import { Routes, Route } from 'react-router-dom';
import Books from './routes/books/books';
import Categories from './routes/categories/categories';
import NoMatch from './routes/no-match/no-match';
import Header from './components/header/header';

export default function App() {
  return (
    <>
      <Header />
      <main className="w-full h-full">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route
            path="categories"
            element={<Categories />}
          />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </main>
    </>
  );
}
