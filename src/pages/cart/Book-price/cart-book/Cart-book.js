import { useMemo, useContext } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

import './Cart-book.scss';

import { CartContext } from '../../../../context/context';

import data from '../../../../fixtures/books.json';

export const CartBook = ({ id, amount }) => {
  const [cart, setCart] = useContext(CartContext);
  const book = useMemo(() => {
    return data.books.find((b) => {
      return b.id === id;
    });
  }, [id]);

  const handleAmountChange = (e) => {
    const newAmount = e.target.value;
    if (newAmount < 0 || newAmount > 32) return;
    const newCart = [...cart];
    const currentItem = newCart.find((item) => item.id === id);
    currentItem.amount = +newAmount;
    setCart(newCart);
  };

  return (
    <Row className={`book-price-line${!amount ? ' empty' : ''}`}>
      <Col md={6}>{book.title}</Col>
      <Col md={3}>{book.author}</Col>
      <Col md={2} className="total-price">
        ${book.price} x
      </Col>
      <Col className="btn-total-price" md={1}>
        <Form.Control
          className="form-total-price"
          type="number"
          value={amount}
          onChange={handleAmountChange}
        />
      </Col>
    </Row>
  );
};
