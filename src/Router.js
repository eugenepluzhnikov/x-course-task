import { Route, Routes, Navigate } from 'react-router-dom';

import { BookList } from "./pages/book-list/Book-list";
import { Cart } from "./pages/cart/Cart";
import { Signin } from "./pages/signin/Signin";
import { SpecificBook } from "./pages/specific-book/Specific-book";


export const Router = () => {
  return (
    <section className="page">
      <Routes>
        <Route path="/books/:id" element={<SpecificBook />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<Navigate to="/books" replace />} />
      </Routes>
    </section>
  )
};