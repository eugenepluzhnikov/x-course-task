import { Route, Routes, Navigate } from 'react-router-dom';

import { BookList } from './pages/book-list/Book-list';
import { Cart } from './pages/cart/Cart';
import { Signin } from './pages/signin/Signin';
import { SpecificBook } from './pages/specific-book/Specific-book';
import { PrivateRoute } from './components/private-route/Private-route';

export const Router = () => {
  return (
    <section className="page">
      <Routes>
        <Route
          path="/books/:id"
          element={
            <PrivateRoute>
              <SpecificBook />
            </PrivateRoute>
          }
        />
        <Route
          path="/books"
          element={
            <PrivateRoute>
              <BookList />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<Navigate to="/books" replace />} />
      </Routes>
    </section>
  );
};
