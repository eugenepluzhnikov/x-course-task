import { Row, Col, Button } from "react-bootstrap";

import { useContext, useMemo } from "react";
import { CartContext } from "../../../context/context";

import {CartBook}  from "./cart-book/Cart-book";
import data from "../../../fixtures/books.json"


import "./Book-prise.scss";


export const BookPrice = () => {
  

  const [cart] = useContext(CartContext);
  const totalPrice = useMemo(() => {
    return cart.reduce((acc, item) => {
      const {price} = data.books.find((b) => b.id === item.id)
      return acc + price * item.amount;
    },0)

  }, [cart])

  return (
    <>
      <Row >
        <Col className="cart-bt-col">
          <Button variant="outline-dark" className="cart-bt" >Purchase</Button>
        </Col>
      </Row>
      {cart.map((item) => {
        return <CartBook  key={item.id} {...item}/>
      })}
      <Row className="price">
        <Col md={3} className="price-text">Total price: </Col>
        <Col md={2}>${totalPrice}</Col>
      </Row>
    </>
  );
}



    // <>
    // //   <Row >
    // //     <Col className="cart-bt-col">
    // //     <Button variant="outline-dark" className="cart-bt" >Purchase</Button>
    // //     </Col>
    // //   </Row>
    // //   <Row className="book-price-line">
    // //     <Col md={3}>{book.title}</Col>
    // //     <Col md={3}>{book.author}</Col>
    // //     <Col md={6} className="total-price" >{book.price}</Col>
    // //   </Row>
    // //   <Row className="price">
    // //     <Col md={3} className="price-text">Total price, $</Col>
    // //     <Col md={1} >100</Col>
    // //   </Row>
    // </>