import {Button, Container, Row } from "react-bootstrap";

import { BookPrice } from "./Book-price/Book-price";
import {CartEmpty} from "./Cart-empty/Cart-empty";


import "./Cart.scss";


export const Cart = () => {
  return (
    <Container className="cart">
      <Row className="cart-bt">
        <Button variant="outline-dark">Purchase</Button>
      </Row>
      {/* <CartEmpty /> */}
      <BookPrice />
    </Container>
  )
}