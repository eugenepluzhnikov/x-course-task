import { Container, Row, Col, Form } from "react-bootstrap";
import { useState, useMemo } from "react";

import "./Book-list.scss";

import { Book } from "./book/Book";
import data from "../../fixtures/books.json"

export const BookList = () => {
  const [search, setSearch] = useState("");
  const books = useMemo(() => {
    if (!search) {
      return (data.books);
    }
    return data.books.filter((book) => {
      return book.title.includes(search) || book.author.includes(search);
    })
  }, [search])
  return (
    <Container>
      <Row className="form-book-list">
        <Col md={5}>
          <Form.Control value={search} onChange={(e) => setSearch(e.target.value.trim())}
            placeholder="Search my book name" />
        </Col>
        <Col md={4}>
          <Form.Select disabled>
            <option>Price</option>
          </Form.Select>
        </Col>
      </Row>
      <Row className="book" >
        {books.map((book) => {
          return <Book key={book.id} {...book} />
        })
        }
      </Row>
    </Container>
  )
}