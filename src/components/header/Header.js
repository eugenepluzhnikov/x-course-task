import { Button, Nav, Image, Navbar, Container } from 'react-bootstrap';

import "./Header.scss";

import cartImg from "../../img/cart.svg";
import avatarImg from "../../img/avatar.svg"

export const Header = () => {
  return (
    <Navbar className='header-navbar'>
      <Container className='container'>
        <Navbar.Brand href="#home">JS BAND STORE / Your full name</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Image src={cartImg} alt="shopping cart icon" className="cart-img" rounded />
            <Button variant="outline-dark" >Sign-Out</Button>
            <div className='avatar'>
              <Image src={avatarImg} alt="avatar" rounded />
            </div>
            <Navbar.Text className='navbar-text'>Username</Navbar.Text>
          </Nav>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

