import React, { useState } from "react";
import axios from "axios";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, Container, Form } from "react-bootstrap";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function handleLoginWithFirebase(e) {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      // If login successful, navigate to '/index'
      navigate('/index');
    } catch (error) {
      console.log("Error signing in: ", error);
      // Handle error logging in
    }
  }

  return (
    <Container style={{ backgroundColor: "", padding: "20px" }}>
      <Form onSubmit={handleLoginWithFirebase}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </Form.Group>
        <Container className="d-flex justify-content-end">
          <Button variant="primary" type="submit">
            Entrar
          </Button>
        </Container>
      </Form>
    </Container>
  );
}
