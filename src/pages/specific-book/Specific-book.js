import { Image, Button, Container, Row, Col } from "react-bootstrap";

import "./Specific-book.scss";

import book from "../../img/book.jpg";
import arrowUp from "../../img/arrowUp.svg";
import arrowDown from "../../img/arrowDown.svg";

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

        <Col md={3}>
          <div className="priceTitle">
            Price, $
            <div>0</div>
          </div>
          <div className="priceTitle">
            Count
            <div className="countButton">
              <Button variant="outline-dark">Card</Button>
              <div className="countButtonArrow">
                <Button variant="outline-dark" className="buttonArrow">
                  <img src={arrowUp} alt="arrowUp" className="imgArrow" />
                </Button>
                <Button variant="outline-dark" className="buttonArrow ">
                  <img src={arrowDown} alt="arrowDown" className="imgArrow" />
                </Button>
              </div>
            </div>
          </div>
          <div className="priceTitle">
            Total price, $
            <div>0</div>
          </div>
          <Button variant="outline-dark" className="addCard">Add to card</Button>
        </Col>
      </Row>
    </Container>
  )
}