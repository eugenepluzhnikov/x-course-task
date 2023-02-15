import { useState } from "react";
import { Image, Button, Container, Row, Col, Form } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import "./Specific-book.scss";

import data from "../../fixtures/books.json"

export const SpecificBook = () => {
  const [amount, setAmount] = useState(1);
  const { id } = useParams();
  const book = data.books.find((b) => b.id === +id);
  if (!book) return (<Navigate to="/books" replace />);
  const handleAmountChange = (e)=> {
    let value = +e.target.value
    if(value % 1 !== 0) return;
    if(value < 1) value= ""
    setAmount(value);
  }

  return (
    <Container className="specific-book">
      <Row>
        <Col md={4}>
          <Image src={book.image} alt={`'${book.title}' ${book.author}`} className="img-book" />
          <p>{book.shortDescription}</p>
        </Col>

        <Col md={4}>
          <Row className="info">
            <Col className="title">Book name:</Col>
            <Col>{book.title}</Col>
          </Row>
          <Row className="info">
            <Col className="title">Book author:</Col>
            <Col>{book.author}</Col>
          </Row>
          <Row className="info">
            <Col className="title">Description:</Col>
          </Row>
          <Row className="info">
            <Col>{book.description}</Col>
          </Row>
        </Col>

        <Col md={4} className="cart-info">
          <Row className="info">
            <Col md={7} className="title">Price, $</Col>
            <Col md={5} className="value" >{book.price}</Col>
          </Row>
          <Row className="info">
            <Col md={7} className="title">Count</Col>
            <Col md={5}>
              <Form.Control type="number" value={amount} onChange={handleAmountChange}/>
            </Col>
          </Row>
          <Row className="info">
            <Col md={7} className="title">Total price, $</Col>
            <Col md={5} className="value" >{book.price*amount}</Col>
          </Row>
          <Row  >
            <Col md={12} className="btn-row">
              <Button variant="outline-dark" className="addCard">Add to card</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}