import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { FaHeart, FaPlus } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import grocery34 from "../assets/grocery34.jpg";
import grocery35 from "../assets/grocery35.png";
import grocery36 from "../assets/grocery36.png";
import grocery37 from "../assets/grocery37.png";
import grocery38 from "../assets/grocery38.png";

function SpecialProducts() {
  return (
    <Container fluid className="px-4 px-md-5 py-5">

      <Row className="g-5">

        {/* LEFT CARD */}
        <Col xs={12} lg={3}>

          <Card
            className="border-0 rounded-4 overflow-hidden h-100"
            style={{
              backgroundColor: "#acd5e5",
              minHeight: "580px"
            }}
          >

            <Card.Body className="p-5">

              <h2 className="fw-bold mb-5">
                Make breakfast
                <br />
                healthy and
                <br />
                easy
              </h2>

              <a
                href="#"
                className="text-dark text-decoration-none fs-5"
              >
                Shop now&nbsp; <MdKeyboardArrowRight />
              </a>

            </Card.Body>

            {/* IMAGE */}
            <div
              className="d-flex align-items-end justify-content-center"
              style={{
                height: "300px",
                marginTop: "-20px"
              }}
            >
              <img
                src={grocery34}
                alt="Breakfast"
                className="img-fluid"
                style={{
                  width: "90%",
                  height: "100%",
                  objectFit: "contain"
                }}
              />
            </div>

          </Card>

        </Col>


        {/* RIGHT SIDE */}
        <Col xs={12} lg={9}>

          {/* HEADING */}
          <div className="d-flex justify-content-between align-items-center border-bottom pb-4 mb-4">

            <h2 className="fw-bold mb-0">
              Special products
            </h2>

            <a
              href="#"
              className="text-dark text-decoration-none fs-5"
            >
              View all&nbsp;  <MdKeyboardArrowRight />
            </a>

          </div>


          {/* PRODUCTS */}
          <Row className="g-4">
           
                        {/* PRODUCT 1 */}
                        <Col xs={6} md={3}>
                            <Card className="border-0 h-100">

                                {/* IMAGE  1*/}
                                <div
                                    className="bg-light rounded-4 d-flex align-items-center justify-content-center"
                                    style={{ height: "180px" }}
                                >
                                    <img
                                        src={grocery35}
                                        alt="Pure vargin olive oil"
                                        className="img-fluid"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "contain"
                                        }}
                                    />
                                </div>

                                <Card.Body className="px-0">
                                    <h5 className="fw-bold mt-2">
                                        $18.60
                                    </h5>

                                    <Card.Title className="fs-6">
                                      Pure virgin olive 
                                        <br />
                                      oil Basso
                                    </Card.Title>

                                    <small className="text-secondary">
                                        1000ml
                                    </small>


                                </Card.Body>

                            </Card>
                        </Col>
                        
                        {/* PRODUCT 2 */}
                        <Col xs={6} md={3}>
                            <Card className="border-0 h-100">

                                {/* IMAGE 2 */}
                                <div
                                    className="bg-light rounded-4 d-flex align-items-center justify-content-center"
                                    style={{ height: "180px" }}
                                >
                                    <img
                                        src={grocery36}
                                        alt="Muesli Fitness Energy"
                                        className="img-fluid"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "contain"
                                        }}
                                    />
                                </div>

                                <Card.Body className="px-0">
                                    <h5 className="fw-bold mt-2">
                                        $9.15
                                    </h5>

                                    <Card.Title className="fs-6">
                                      Fresh pork butt steaks
                                        <br />
                                        with rosemary
                                    </Card.Title>

                                    <small className="text-secondary">
                                        500g
                                    </small>


                                </Card.Body>

                            </Card>
                        </Col>
                        
                        {/* PRODUCT 3 */}
                        <Col xs={6} md={3}>
                            <Card className="border-0 h-100">

                                {/* IMAGE 3 */}
                                <div
                                    className="bg-light rounded-4 d-flex align-items-center justify-content-center"
                                    style={{ height: "180px" }}
                                >
                                    <img
                                        src={grocery37}
                                        alt="Muesli Fitness Energy"
                                        className="img-fluid"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "contain"
                                        }}
                                    />
                                </div>

                                <Card.Body className="px-0">
                                    <h5 className="fw-bold mt-2">
                                        $3.40
                                    </h5>

                                    <Card.Title className="fs-6">
                                       Fresh red,
                                        <br />
                                       grapefruit
                                    </Card.Title>

                                    <small className="text-secondary">
                                        1kg
                                    </small>


                                </Card.Body>

                            </Card>
                        </Col>
                        
                        {/* PRODUCT 4 */}
                        <Col xs={6} md={3}>
                            <Card className="border-0 h-100">

                                {/* IMAGE 4 */}
                                <div
                                    className="bg-light rounded-4 d-flex align-items-center justify-content-center"
                                    style={{ height: "180px" }}
                                >
                                    <img
                                        src={grocery38}
                                        alt="Muesli Fitness Energy"
                                        className="img-fluid"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "contain"
                                        }}
                                    />
                                </div>

                                <Card.Body className="px-0">
                                    <h5 className="fw-bold mt-2">
                                        $2.59
                                    </h5>

                                    <Card.Title className="fs-6">
                                    Soft creame chesse with
                                        <br />
                                     green Exqusa
                                    </Card.Title>

                                    <small className="text-secondary">
                                        500g
                                    </small>


                                </Card.Body>

                            </Card>
                        </Col>
           
            </Row>

        </Col>

      </Row>

    </Container>
  );
}

export default SpecialProducts;