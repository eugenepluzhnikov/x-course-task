import { Image, Button, Container, Row, Col } from "react-bootstrap";

import cartImg from "../../img/cart.svg"

import "./Cart.scss";


export const Cart = () => {
  return (
    <Container className="cart">
      <Row>
        <Row className="cart-bt">
          <Button variant="outline-dark">Purchase</Button>
        </Row>

        <Row className="empty-basket">
          <Row className="cart-img">
            <Image src={cartImg} alt="shopping cart icon" className="cart-img" rounded />
          </Row>
          <Row className="empty">Cart empty...</Row>
        </Row>
      </Row>
    </Container>
  )
}