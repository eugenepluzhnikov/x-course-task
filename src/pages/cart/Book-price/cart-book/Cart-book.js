import { useMemo } from "react";
import { Row, Col, Form } from "react-bootstrap";

import './Cart-book.scss';


import data from "../../../../fixtures/books.json"

export const CartBook = ({ id, amount }) => {

  const book = useMemo(() => {
    return data.books.find((b) => {
      return b.id === id;
    })
  }, [id])
  return (
    <Row className="book-price-line">
      <Col md={5}>{book.title}</Col>
      <Col md={4}>{book.author}</Col>
      <Col md={2} className="total-price" >${book.price} x</Col>
      <Col className="btn-total-price" md={1}>
        <Form.Control className="form-total-price" type="number" value={amount} />
      </Col>
    </Row>
  )
}