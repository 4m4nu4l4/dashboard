import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const styles = {
  section: {
    padding: "20px",
    margin: "20px auto",
    border: "1px solid #4D4D4D",
    backgroundColor: "#ECCEAD",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  recipeSection: {
    padding: "20px",
    margin: "20px auto",
    border: "1px solid #4D4D4D",
    backgroundColor: "#ECCEAD",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  fullHeightRow: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
};

function TextControlsExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Compartilhe sua receita preferida com a gente!</Form.Label>
        <Form.Control type="text" placeholder="1 xícara de.." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Modo de preparo:</Form.Label>
        <Form.Control as="textarea" placeholder="Misture os igredientes secos.." rows={3} />
      </Form.Group>
      <Button
        style={{
          backgroundColor: "#52271C",
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
  );
}

export default function Contato() {
  return (
    <Container>
      <Row style={styles.fullHeightRow}>
        <Col md={12}>
          <section style={styles.section}>
            <h4>Comidas do nosso Brasil 💚</h4>
            <p>📞(47) 47 00000-0000</p>
            <p>✉️ cozinhabrasileira@gmail.com</p>
          </section>
        </Col>
        <Col md={12}>
          <section style={styles.recipeSection}>
            <TextControlsExample />
          </section>
        </Col>
      </Row>
    </Container>
  );
}
