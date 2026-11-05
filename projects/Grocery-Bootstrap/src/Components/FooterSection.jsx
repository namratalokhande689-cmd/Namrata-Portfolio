import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
    FaWhatsapp,
    FaTelegramPlane,
    FaFacebookF,
    FaInstagram,
    FaHeart,
} from "react-icons/fa";

function FooterSection() {
    return (
        <footer
            style={{
                backgroundColor: "#202733",
                color: "#fff",
            }}
        >
            {/* Newsletter */}
            <Container fluid className="px-4 px-md-5">
                <div
                    className="text-center py-5"
                    style={{
                        minHeight: "390px",
                        borderBottom: "1px solid #343d4a",
                    }}
                >
                    <h1 className="fw-bold mb-4">
                        Stay in touch with us
                    </h1>

                    <p
                        className="mb-5"
                        style={{
                            color: "#d6dbe3",
                            fontSize: "22px",
                        }}
                    >
                        Receive the latest updates about our products & promotions
                    </p>

                    <Form
                        className="d-flex justify-content-center align-items-center gap-3"
                    >
                        <Form.Control
                            type="email"
                            placeholder="Your email"
                            className="bg-transparent-light"
                            style={{
                                maxWidth: "670px",
                                height: "72px",
                                border: "1px solid #fff",
                                borderRadius: "40px",
                                paddingLeft: "28px",
                                fontSize: "22px",
                            }}
                        />

                        <Button
                            type="submit"
                            style={{
                                height: "72px",
                                padding: "0 38px",
                                border: "none",
                                borderRadius: "40px",
                                backgroundColor: "#f34f69",
                                fontSize: "23px",
                                fontWeight: "600",
                            }}
                        >
                            Subscribe
                        </Button>
                    </Form>
                </div>
            </Container>

            {/* Footer Links */}
            <Container fluid className="px-4 px-md-5 py-5">
                <Row className="g-5">

                    {/* Cartzilla */}
                    <Col xs={12} md={6} lg={4}>
                        <h2 className="fw-bold mb-4">
                            Cartzilla
                        </h2>

                        <p
                            style={{
                                color: "#d6dbe3",
                                fontSize: "20px",
                                lineHeight: "1.55",
                                maxWidth: "430px",
                            }}
                        >
                            With a wide selection of fresh produce,
                            pantry staples, and household essentials,
                            we've got everything you need just a
                            click away.
                        </p>
                        <div className="d-flex gap-3 mt-4">

                            <a
                                href="#"
                                className="text-white d-flex align-items-center justify-content-center"
                                style={{
                                    width: "42px",
                                    height: "42px",
                                    border: "1px solid #69717d",
                                    borderRadius: "50%",
                                }}
                            >
                                <FaInstagram size={18} />

                            </a>

                            <a
                                href="#"
                                className="text-white d-flex align-items-center justify-content-center"
                                style={{
                                    width: "42px",
                                    height: "42px",
                                    border: "1px solid #69717d",
                                    borderRadius: "50%",
                                }}
                            >
                                <FaFacebookF size={18} />
                            </a>

                            <a
                                href="#"
                                className="text-white d-flex align-items-center justify-content-center"
                                style={{
                                    width: "42px",
                                    height: "42px",
                                    border: "1px solid #69717d",
                                    borderRadius: "50%",
                                }}
                            >
                                <FaTelegramPlane size={18} />
                            </a>

                            <a
                                href="#"
                                className="text-white d-flex align-items-center justify-content-center"
                                style={{
                                    width: "42px",
                                    height: "42px",
                                    border: "1px solid #69717d",
                                    borderRadius: "50%",
                                }}
                            >
                                <FaWhatsapp size={18} />
                            </a>

                        </div>
                    </Col>

                    {/* Categories */}
                    <Col xs={6} md={3} lg={2}>
                        <h4 className="fw-bold mb-4">
                            Categories
                        </h4>

                        <FooterLink text="Weekly sale" />
                        <FooterLink text="Special price" />
                        <FooterLink text="Easter is coming" />
                        <FooterLink text="Italian dinner" />
                    </Col>

                    {/* Company */}
                    <Col xs={6} md={3} lg={2}>
                        <h4 className="fw-bold mb-4">
                            Company
                        </h4>

                        <FooterLink text="Blog and news" />
                        <FooterLink text="About us" />
                        <FooterLink text="FAQ page" />
                        <FooterLink text="Contact us" />
                    </Col>

                    {/* Account */}
                    <Col xs={6} md={3} lg={2}>
                        <h4 className="fw-bold mb-4">
                            Account
                        </h4>

                        <FooterLink text="Your account" />
                        <FooterLink text="Shipping & policies" />
                        <FooterLink text="Refunds & replacements" />
                        <FooterLink text="Order tracking" />
                    </Col>

                    {/* Customer Service */}
                    <Col xs={6} md={3} lg={2}>
                        <h4 className="fw-bold mb-4">
                            Customer service
                        </h4>

                        <FooterLink text="Payment methods" />
                        <FooterLink text="Money back guarantee" />
                        <FooterLink text="Refunds & replacements" />
                        <FooterLink text="Order tracking" />
                    </Col>

                </Row>
            </Container>

    {/* Copyright Section */}
    <div
        style={{
            borderTop: "1px solid #343d4a",
        }}
    >
        <Container fluid className="px-4 px-md-5 py-4">
            <Row className="align-items-center">

                <Col xs={12} md={6}>
                    <p
                        className="mb-0"
                        style={{
                            color: "#aeb6c2",
                            fontSize: "16px",
                        }}
                    >
                        © All rights reserved. Made with <FaHeart /> by  Coderthemes
                    </p>
                    </Col>

            </Row>
        </Container>
    </div>

        </footer>
    );
}


/* Footer Link */
function FooterLink({ text }) {
    return (
        <div className="mb-4">
            <a
                href="#"
                className="text-decoration-none"
                style={{
                    color: "#d6dbe3",
                    fontSize: "20px",
                }}
            >
                {text}
            </a>
        </div>
    );
}

export default FooterSection;