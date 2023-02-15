import { useState, useContext } from "react";
import { Container, Image, Form, Button } from "react-bootstrap";

import { UserContext } from "../../context/context";

import avatar2 from "../../img/avatar2.svg";

import "./Signin.scss";

export const Signin = () => {
  const setUser = useContext(UserContext)[1];
  const [name, setName] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    setUser(name)
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