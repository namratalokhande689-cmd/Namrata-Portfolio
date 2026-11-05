import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import grocery15 from "../assets/grocery15.png";
import grocery16 from "../assets/grocery16.png";
import grocery17 from "../assets/grocery17.png";
import { MdKeyboardArrowRight } from "react-icons/md";

function Cards() {
  return (
    <Container fluid className="px-4 py-4">

      <Row className="g-4">

        {/* Card 1 */}
        <Col xs={12} md={4}>
          <Card
            className="border-0 rounded-4 overflow-hidden h-100"
            style={{ backgroundColor: "#fff0f2", minHeight: "330px" }}
          >
            <Row className="g-0 h-100">

              <Col
                xs={7}
                className="d-flex flex-column justify-content-center p-4"
              >
                <small className="text-secondary mb-3">
                  124 products
                </small>

                <h3 className="fw-bold">
                  Only fresh
                  <br />
                  fish to your
                  <br />
                  table
                </h3>

                <a
                  href="#"
                  className="text-dark text-decoration-none mt-3"
                >
                  Shop now &nbsp; <MdKeyboardArrowRight />
                </a>
              </Col>

              <Col xs={5} className="d-flex align-items-end">
                <img
                  src={grocery15}
                  alt="Fresh fish"
                  className="img-fluid w-100"
                />
              </Col>

            </Row>
          </Card>
        </Col>


        {/* Card 2 */}
        <Col xs={12} md={4}>
          <Card
            className="border-0 rounded-4 overflow-hidden h-100"
            style={{ backgroundColor: "#edf9f3", minHeight: "330px" }}
          >
            <Row className="g-0 h-100">

              <Col
                xs={7}
                className="d-flex flex-column justify-content-center p-4"
              >
                <small className="text-secondary mb-3">
                  97 products
                </small>

                <h3 className="fw-bold">
                  Products for
                  <br />
                  Easter table
                </h3>

                <a
                  href="#"
                  className="text-dark text-decoration-none mt-3"
                >
                  Shop now &nbsp; <MdKeyboardArrowRight />
                </a>
              </Col>

              <Col xs={5} className="d-flex align-items-end">
                <img
                  src={grocery16}
                  alt="Easter products"
                  className="img-fluid w-100"
                />
              </Col>

            </Row>
          </Card>
        </Col>


        {/* Card 3 */}
        <Col xs={12} md={4}>
          <Card
            className="border-0 rounded-4 overflow-hidden h-100"
            style={{ backgroundColor: "#edf4ff", minHeight: "330px" }}
          >
            <Row className="g-0 h-100">

              <Col
                xs={7}
                className="d-flex flex-column justify-content-center p-4"
              >
                <small className="text-secondary mb-3">
                  28 products
                </small>

                <h3 className="fw-bold">
                  Berries from
                  <br />
                  the garden
                </h3>

                <a
                  href="#"
                  className="text-dark text-decoration-none mt-3"
                >
                  Shop now &nbsp; <MdKeyboardArrowRight />
                </a>
              </Col>

              <Col xs={5} className="d-flex align-items-end">
                <img
                  src={grocery17}
                  alt="Fresh berries"
                  className="img-fluid w-100"
                />
              </Col>

            </Row>
          </Card>
        </Col>

      </Row>

    </Container>
  );
}

export default Cards;