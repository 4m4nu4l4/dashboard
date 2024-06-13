import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const styles = {
  section: {
    padding: "20px",
    margin: "20px auto",
    maxWidth: "550px",
    border: "1px solid #4D4D4D",
    backgroundColor: "#F6F5F5",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  loginSection: {
    border: "1px solid #4D4D4D",
    borderRadius: "8px",
    padding: "20px",
    margin: "20px 0",
  },
};

export default function Contato() {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <section style={styles.section}>
            <h1>Comidas deliciosas</h1>
            <p>
              Nosso horário de funcionamento
              <br />
              Das 08:00 as 17:00
            </p>

            <p>📞(47) 47 00000-0000</p>
            <p>✉️ cozinhabrasileira@gmail.com</p>
          </section>
        </Col>
        <Col md={6}>
          <section style={styles.loginSection}>
            <h2>Faça seu Login aqui!</h2>
            <BasicExample />
          </section>
        </Col>
      </Row>
    </Container>
  );
}

function BasicExample() {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="Digite seu email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha:</Form.Label>
          <Form.Control type="password" placeholder="Digite sua senha" />
          <Form.Text className="text-muted">
            Não compartilhe sua senha com ninguém!
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Lembrar minha senha" />
        </Form.Group>
        <Button
          style={{
            backgroundColor: "#C9940B",
            borderColor: "#C9940B",
            color: "white",
            fontWeight: "bold",
            fontFamily: "Roboto",
          }}
          type="submit"
        >
          Enviar
        </Button>
      </Form>
    </Container>
  );
}
