
import { Image, Button, Row, Col} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


import "./Book.scss";


export const Book = ({image, title, author, price, id}) => {
  const navigate = useNavigate();

  return (

    <Col className="book-view" md={4} >
      <div className="form-book">
        <Row>
          <Image src={image} />
        </Row>
        <Row>
          <Col className="title-book">Book name:</Col>
          <Col>{title}</Col>
        </Row>
        <Row>
          <Col className="title-book">Book author:</Col>
        <Col>{author}</Col>
        </Row>
        <Row>
          <Col className="title-book">Price: {price}</Col>
          <Col>
            <Button variant="outline-dark" onClick={() => navigate(`/books/${id}`)}>
              View
            </Button>
          </Col>
        </Row>
      </div>
    </Col>
  )
}