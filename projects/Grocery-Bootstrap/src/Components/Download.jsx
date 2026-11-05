import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FaGooglePlay, FaApple } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

import grocery43 from "../assets/grocery43.png";
import grocery44 from "../assets/grocery44.png";

function Download() {
  return (
    <Container fluid className="px-4 px-md-5 py-5">

      <Row className="g-4">

        {/* LEFT CARD - DOWNLOAD APP */}
        <Col xs={12} lg={7}>

          <div
            className="rounded-4 overflow-hidden h-100"
            style={{
              backgroundColor: "#f1f4f8",
              minHeight: "425px"
            }}
          >

            <Row className="h-100 align-items-center">

              {/* IMAGE */}
              <Col xs={5} className="align-self-end">

                <img
                  src={grocery43}
                  alt="Cartzilla delivery"
                  className="img-fluid"
                  style={{
                    width: "100%",
                    height: "425px",
                    objectFit: "contain",
                    objectPosition: "bottom"
                  }}
                />

              </Col>


              {/* CONTENT */}
              <Col xs={7} className="p-4 p-md-5">

                <h2 className="fw-bold mb-4">
                  Make online shop easier
                  with our <br/>Cartzilla App
                </h2>


                {/* GOOGLE PLAY */}
                <a
                  href="#"
                  className="bg-white rounded-pill text-dark text-decoration-none d-flex align-items-center px-4 py-3 mb-3"
                  style={{ width: "210px" }}
                >
                  <FaGooglePlay
                    size={27}
                    className="me-3"
                  />

                  <span className="fs-5">
                    Google Play
                  </span>
                </a>


                {/* APP STORE */}
                <a
                  href="#"
                  className="bg-white rounded-pill text-dark text-decoration-none d-flex align-items-center px-4 py-3"
                  style={{ width: "210px" }}
                >
                  <FaApple
                    size={29}
                    className="me-3"
                  />

                  <span className="fs-5">
                    App Store
                  </span>
                </a>

              </Col>

            </Row>

          </div>

        </Col>


        {/* RIGHT CARD - FEEDBACK */}
        <Col xs={12} lg={5}>

          <div
            className="rounded-4 overflow-hidden h-100"
            style={{
              backgroundColor: "#f1f4f8",
              minHeight: "425px"
            }}
          >

            <Row className="h-100 align-items-center">

              {/* IMAGE */}
              <Col xs={5} className="align-self-end">

                <img
                  src={grocery44}
                  alt="Give feedback"
                  className="img-fluid"
                  style={{
                    width: "100%",
                    height: "425px",
                    objectFit: "contain",
                    objectPosition: "bottom"
                  }}
                />

              </Col>


              {/* CONTENT */}
              <Col xs={7} className="p-4">

                <h2 className="fw-bold mb-5">
                  We'd love to
                  <br />
                  hear what you
                  <br />
                  think!
                </h2>

                <a
                  href="#"
                  className="text-dark text-decoration-none fs-5 d-inline-flex align-items-center"
                >
                  Give a feedback
                  <MdKeyboardArrowRight
                    size={25}
                  />
                </a>

              </Col>

            </Row>

          </div>

        </Col>

      </Row>

    </Container>
  );
}

export default Download;