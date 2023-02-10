import { createBrowserRouter, Navigate } from "react-router-dom";

import { BookList } from "./pages/book-list/Book-list";
import { Cart } from "./pages/cart/Cart";
import { Signin } from "./pages/signin/Signin";
import { SpecificBook } from "./pages/specific-book/Specific-book";

export const router = createBrowserRouter([
  {
    path: "/books/:id",
    element: <SpecificBook />,
  },
  {
    path: "/books",
    element: <BookList />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "*",
    element: <Navigate to="/books" replace />,
  },
]);