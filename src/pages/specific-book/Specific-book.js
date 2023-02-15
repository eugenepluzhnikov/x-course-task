import { Image, Button, Container, Row, Col, Form } from "react-bootstrap";

import "./Specific-book.scss";

import book from "../../img/book.jpg";

export const SpecificBook = () => {
  return (
    <Container className="specific-book">
      <Row>
        <Col md={5}>
          <Image src={book} alt="'Енеїда' Іван Котляревський" className="img-book" />
        </Col>

        <Col md={4}>
          <Row className="info">
            <Col className="title">Book name:</Col>
            <Col>Енеїда</Col>
          </Row>
          <Row className="info">
            <Col className="title">Book author:</Col>
            <Col>Іван Котляревський</Col>
          </Row>
          <Row className="info">
            <Col className="title">Book level:</Col>
            <Col>Beginner</Col>
          </Row>
          <Row className="info">
            <Col className="title">Book name:</Col>
            <Col>core</Col>
          </Row>
        </Col>

        <Col md={3} className="cart-info">
          <Row className="info">
            <Col md={7} className="title">Price, $</Col>
            <Col md={5} className="value" >0</Col>
          </Row>
          <Row className="info">
            <Col md={7} className="title">Count</Col>
            <Col md={5}>
              <Form.Control type="number" />
            </Col>
          </Row>
          <Row className="info">
            <Col md={7} className="title">Total price, $</Col>
            <Col md={5} className="value" >0</Col>
          </Row>
          <Row className="btn-row" >
            <Col md={7}>
              <Button variant="outline-dark" className="addCard">Add to card</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}