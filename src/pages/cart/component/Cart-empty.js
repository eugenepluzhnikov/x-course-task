import { Image, Row} from "react-bootstrap";

import "./Cart-empty.scss";

import cartImg from "../../../img/cart.svg";


export const CartEmpty  = () =>{
  return(
    <Row className="empty-basket">
        <Row className="cart-img">
          <Image src={cartImg} alt="shopping cart icon" className="cart-empty-img" rounded />
          Cart empty...
        </Row>
      </Row>
  )}