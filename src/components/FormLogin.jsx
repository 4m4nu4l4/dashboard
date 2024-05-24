import axios from "axios";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin() {
    const payload = {
      email: email,
      senha: senha,
    };
    const resposta = await axios.post("http://localhost:3000/login", payload);
    console.log(resposta);
  }

  return (
    <Container>
      <Form>
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
