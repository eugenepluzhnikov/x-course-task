import { Container, Row, Col, Form } from 'react-bootstrap';
import { useState, useMemo } from 'react';

import './Book-list.scss';

import { Book } from './book/Book';
import data from '../../fixtures/books.json';

export const BookList = () => {
  const [searchPrice, setSearchPrice] = useState(0);
  const [search, setSearch] = useState('');
  const books = useMemo(() => {
    if (!search && !searchPrice) {
      return data.books;
    }
    return data.books.filter((book) => {
      return (
        (book.title.includes(search) || book.author.includes(search)) &&
        searchPrice &&
        book.price <= searchPrice &&
        book.price > searchPrice - 10
      );
    });
  }, [search, searchPrice]);
  return (
    <Container>
      <Row className="form-book-list">
        <Col md={5}>
          <Form.Control
            value={search}
            onChange={(e) => setSearch(e.target.value.trim())}
            placeholder="Search my book name"
          />
        </Col>
        <Col md={4}>
          <Form.Select
            onChange={(e) => {
              setSearchPrice(+e.target.value);
            }}
          >
            {[0, 10, 20, 30, 40, 50].map((price) => {
              return (
                <option key={price} value={price}>
                  ${price ? price - 10 : ''}
                  {price ? '-' : ''}
                  {price}
                </option>
              );
            })}
          </Form.Select>
        </Col>
      </Row>
      <Row className="book">
        {books.map((book) => {
          return <Book key={book.id} {...book} />;
        })}
      </Row>
    </Container>
  );
};
