import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <Container
      style={{
        backgroundColor: "#52271C",
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
                color: "#ECCEAD",
              }}
            >
              Endereço caixa postal
            </h4>
            <p
              style={{
                color: "#ECCEAD",
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
                color: "#ECCEAD",
              }}
            >
              Redes sociais
            </h4>
            <a
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "#ECCEAD"
              }}
            >
              Facebook
            </a>
            <br />
            <a
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "#ECCEAD",
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
