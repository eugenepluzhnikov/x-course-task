import { useState, useContext } from "react";
import { Container, Image, Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import { UserContext } from "../../context/context";
import { LOCAL_STORAGE } from "../../App.constants";

import avatar2 from "../../img/avatar2.svg";

import "./Signin.scss";

export const Signin = () => {
  const navigate = useNavigate();
  const setUser = useContext(UserContext)[1];
  const [name, setName] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    if(!name)return;
    localStorage.setItem(LOCAL_STORAGE.USER, name);
    setUser(name);
    navigate('/books');
  }
  return (
    <Container className="signin">
      <Image src={avatar2} alt="avatar" className="avatar2" rounded />

      <Form className="signin-form" onSubmit={handleForm}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="type Username" value={name} onChange={(e) => setName(e.target.value.trim())} />
        </Form.Group>

        <Button variant="primary" type="submit" className="btn-sign-in">
          Sign-in
        </Button>
      </Form>
    </Container>
  )
}