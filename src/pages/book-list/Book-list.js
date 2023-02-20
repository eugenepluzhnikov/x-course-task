import { Image, Button, Container, Row, Col, Form } from "react-bootstrap";

import "./Book-list.scss";

import { Book } from "./book/Book";
import data from "../../fixtures/books.json"



export const BookList = () => {

  return (
    <Container>
      <Row md={7} className="form-book-list">
        <Col md={7}>
          <Form.Control type="number" placeholder="Search my book name" />
        </Col>
        <Col md={5}>
          <Form.Select disabled>
            <option>Price</option>
          </Form.Select>
        </Col>
      </Row>
      <Row className="book" md={3}>
        <Book />
      </Row>
    </Container>
  )
}