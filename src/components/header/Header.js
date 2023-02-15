import { Button, Nav, Image, Navbar, Container } from 'react-bootstrap';
import { useLocation } from "react-router-dom"
import { useContext } from 'react';

import { UserContext } from '../../context/context';

import "./Header.scss";

import cartImg from "../../img/cart.svg";
import avatarImg from "../../img/avatar.svg"

export const Header = () => {
  const [user, setUser] = useContext(UserContext);
  const location = useLocation();
  const handleSignOut = () => {
    localStorage.removeItem('user');
    setUser(null);
  }
  return (
    <Navbar className='header-navbar'>
      <Container className='container'>
        <Navbar.Brand>JS BAND STORE / Your full name</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          {location.pathname !== "/signin" && <Nav>
            <Image src={cartImg} alt="shopping cart icon" className="cart-img" rounded />
            <Button variant="outline-dark" onClick={handleSignOut} >Sign-Out</Button>
            <div className='avatar'>
              <Image src={avatarImg} alt="avatar" rounded />
            </div>
            <Navbar.Text className='navbar-text'>{user}</Navbar.Text>
          </Nav>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

