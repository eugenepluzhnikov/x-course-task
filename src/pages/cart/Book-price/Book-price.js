import { Row, Col, Button } from "react-bootstrap";


import { useContext } from "react";
import { CartContext } from "../../../context/context";


import "./Book-prise.scss";

import data from "../../../fixtures/books.json"

export const BookPrice = () => {

  const [cart] = useContext(CartContext);
  console.log(cart);
  const id = cart[0].id - 1;
  const book = data.books[id];
  console.log(book);

  return (


    <>
      <Row >
        <Col className="cart-bt-col">
        <Button variant="outline-dark" className="cart-bt" >Purchase</Button>
        </Col>
      </Row>
      <Row className="book-price-line">
        <Col md={3}>{book.title}</Col>
        <Col md={3}>{book.author}</Col>
        <Col md={6} className="total-price" >{book.price}</Col>
      </Row>
      <Row className="price">
        <Col md={3} className="price-text">Total price, $</Col>
        <Col md={1} >100</Col>
      </Row>
    </>


  )
}