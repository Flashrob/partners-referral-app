import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function Login({email, setEmail, password, setPassword}) {

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email);
    console.log(password);
  }

  return (
    <div className="Login">
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="sm-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="sm-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <br></br>
          <Button block size="sm-3" type="submit" disabled={!validateForm()}>
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
}