import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <Container
      style={{
        backgroundColor: "#B2D0D2",
      }}
    >
      <Row>
        <Col
          lg={6}
          style={{
            margin: "0 90px",
            padding: "20px 0px",
          }}
        >
          <div>
            <h4
              style={{
                color: "#766146",
              }}
            >
              Endereço Loja Física!
            </h4>
            <p
              style={{
                color: "#EB9D51",
                fontWeight: "bold"
              }}
            >
              Av São Pedro, 1234
              <br />
              Santa Catarina
            </p>
          </div>
        </Col>
        <Col
          lg={4}
          style={{
            margin: "0px",
            padding: "20px ",
          }}
        >
          <div>
            <h4
              style={{
                color: "#766146",
              }}
            >
              Redes sociais
            </h4>
            <a
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "#EB9D51"
              }}
            >
              Facebook
            </a>
            <br />
            <a
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "#EB9D51",
              }}
            >
              Instagram
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
