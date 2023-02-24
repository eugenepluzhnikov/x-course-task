import { useMemo } from "react";
import { Row, Col } from "react-bootstrap";


import data from "../../../../fixtures/books.json"

export const CartBook = ({ id, amount }) => {

  const book = useMemo(() => {
    return data.books.find((b) => {
      return b.id === id;
    })
  }, [id])
  return (
    <Row className="book-price-line">
      <Col md={3}>{book.title}</Col>
      <Col md={3}>{book.author}</Col>
      <Col md={6} className="total-price" >${book.price} x{amount}</Col>
    </Row>
  )
}