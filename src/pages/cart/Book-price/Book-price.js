import {Row, Col } from "react-bootstrap";

import "./Book-prise.scss";

export const BookPrice = () => {
  return(
    <Row className="book-price">
        <Row className="book-price-line">
          <Col md={3}>Book name</Col>
          <Col md={3}>Count</Col>
          <Col md={6} className="total-price" >Total price</Col>
        </Row>
        <Row className="price">
          <Col  md={3} className="price-text">Total price, $</Col>
          <Col md={1} >100</Col>
        </Row>
      </Row>
  )
}