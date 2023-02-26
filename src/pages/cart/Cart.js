import { useContext } from 'react';
import { CartContext } from '../../context/context';

import { Container } from 'react-bootstrap';

import { BookPrice } from './Book-price/Book-price';
import { CartEmpty } from './Cart-empty/Cart-empty';

import './Cart.scss';

export const Cart = () => {
  const [cart] = useContext(CartContext);
  return (
    <Container className="cart">
      {cart.length === 0 ? <CartEmpty /> : <BookPrice />}
    </Container>
  );
};
