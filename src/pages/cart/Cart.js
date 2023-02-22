import { useContext } from 'react';
import { CartContext } from '../../context/context';





import {Button, Container, Row } from "react-bootstrap";

import { BookPrice } from "./Book-price/Book-price";
import { CartEmpty } from "./Cart-empty/Cart-empty"

import "./Cart.scss";


export const Cart = () => {

  const [cart] = useContext(CartContext);
  console.log(cart);


  return (
    <Container className="cart">
      <Row className="cart-bt">
        <Button variant="outline-dark">Purchase</Button>
      </Row>
      { cart.length === 0 && <CartEmpty />}
      { cart.length !== 0 && <BookPrice />}
    </Container>
  )
}