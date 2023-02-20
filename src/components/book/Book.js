
import { Image, Button, Container, Row, Col, Form } from "react-bootstrap";

import bookImg from "../../img/book.jpg"
import "./Book.scss";


export const Book = () => {
  return (
    <Row className="form-book">
      <Row>
        <Image src={bookImg} />
      </Row>
      <Row>
        <Col className="title-book">Book name:</Col>
        <Col>Book name</Col>
      </Row>
      <Row>
        <Col className="title-book">Book author:</Col>
        <Col>Book author</Col>
      </Row>
      <Row>
        <Col className="title-book">Price:</Col>
        <Col>
          <Form.Control type="number" />
        </Col>
      </Row>
    </Row>
  )
}