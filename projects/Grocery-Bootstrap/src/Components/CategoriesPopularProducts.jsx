import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import grocery26 from "../assets/grocery26.png";
import grocery01 from "../assets/grocery01.png";
import grocery28 from "../assets/grocery28.png";
import grocery29 from "../assets/grocery29.png";
import grocery30 from "../assets/grocery30.png";
import grocery02 from "../assets/grocery02.png";
import grocery32 from "../assets/grocery32.png";
import grocery33 from "../assets/grocery33.png";
import grocery18 from "../assets/grocery18.png";
import grocery19 from "../assets/grocery19.png";
import grocery20 from "../assets/grocery20.png";
import grocery21 from "../assets/grocery21.png";
import grocery22 from "../assets/grocery22.png";
import grocery23 from "../assets/grocery23.png";
import grocery24 from "../assets/grocery24.png";
import grocery25 from "../assets/grocery25.png";
import { MdKeyboardArrowRight } from "react-icons/md";

function CategoriesPopularProducts() {
    return (
        <Container fluid className="px-4 px-md-5 py-5">

            <Row>

                {/* LEFT SIDE - CATEGORIES */}
                <Col xs={12} md={3}>

                    <h4 className="fw-bold mb-4">
                        Categories
                    </h4>

                    <ListGroup variant="flush">

                        {/* Bakery */}
                        <ListGroup.Item
                            className="border-0 px-0 py-3 d-flex align-items-center"
                        >
                            <img
                                src={grocery18}
                                alt="Bakery"
                                className="me-3"
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    objectFit: "contain"
                                }}
                            />

                            <div>
                                <div className="fw-semibold">
                                    Bakery & bread
                                </div>

                                <small className="text-secondary">
                                    230 products
                                </small>
                            </div>
                        </ListGroup.Item>


                        {/* Vegetables */}
                        <ListGroup.Item
                            className="border-0 px-0 py-3 d-flex align-items-center"
                        >
                            <img
                                src={grocery19}
                                alt="vegetales"
                                className="me-3"
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    objectFit: "contain"
                                }}
                            />

                            <div>
                                <div className="fw-semibold">
                                    Vegetables
                                </div>

                                <small className="text-secondary">
                                    180 products
                                </small>
                            </div>
                        </ListGroup.Item>


                        {/* Fresh Fruits */}
                        <ListGroup.Item
                            className="border-0 px-0 py-3 d-flex align-items-center"
                        >
                            <img
                                src={grocery20}
                                alt="Fruits"
                                className="me-3"
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    objectFit: "contain"
                                }}
                            />

                            <div>
                                <div className="fw-semibold">
                                    Fresh fruits
                                </div>

                                <small className="text-secondary">
                                    205 products
                                </small>
                            </div>
                        </ListGroup.Item>


                        {/* Meat */}
                        <ListGroup.Item
                            className="border-0 px-0 py-3 d-flex align-items-center"
                        >
                            <img
                                src={grocery21}
                                alt="meat"
                                className="me-3"
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    objectFit: "contain"
                                }}
                            />

                            <div>
                                <div className="fw-semibold">
                                    Meat Italian dinner
                                </div>

                                <small className="text-secondary">
                                    309 products
                                </small>
                            </div>
                        </ListGroup.Item>


                        {/* Beverages */}
                        <ListGroup.Item
                            className="border-0 px-0 py-3 d-flex align-items-center"
                        >
                            <img
                                src={grocery22}
                                alt="Baverage"
                                className="me-3"
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    objectFit: "contain"
                                }}
                            />

                            <div>
                                <div className="fw-semibold">
                                    Beverages
                                </div>

                                <small className="text-secondary">
                                    372 products
                                </small>
                            </div>
                        </ListGroup.Item>


                        {/* Meat Products */}
                        <ListGroup.Item
                            className="border-0 px-0 py-3 d-flex align-items-center"
                        >
                            <img
                                src={grocery23}
                                alt="meat"
                                className="me-3"
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    objectFit: "contain"
                                }}
                            />

                            <div>
                                <div className="fw-semibold">
                                    Meat products
                                </div>

                                <small className="text-secondary">
                                    124 products
                                </small>
                            </div>
                        </ListGroup.Item>


                        {/* Sauces */}
                        <ListGroup.Item
                            className="border-0 px-0 py-3 d-flex align-items-center"
                        >
                            <img
                                src={grocery24}
                                alt="Sauce"
                                className="me-3"
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    objectFit: "contain"
                                }}
                            />

                            <div>
                                <div className="fw-semibold">
                                    Sauces and ketchup
                                </div>

                                <small className="text-secondary">
                                    219 products
                                </small>
                            </div>
                        </ListGroup.Item>


                        {/* Dairy */}
                        <ListGroup.Item
                            className="border-0 px-0 py-3 d-flex align-items-center"
                        >
                            <img
                                src={grocery25}
                                alt="chesse"
                                className="me-3"
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    objectFit: "contain"
                                }}
                            />

                            <div>
                                <div className="fw-semibold">
                                    Dairy and eggs
                                </div>

                                <small className="text-secondary">
                                    146 products
                                </small>
                            </div>
                        </ListGroup.Item>

                    </ListGroup>

                </Col>


                {/* RIGHT SIDE - POPULAR PRODUCTS */}
                <Col xs={12} md={9}>

                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h4 className="fw-bold mb-0">
                            Popular products
                        </h4>

                        <a href="#" className="text-dark text-decoration-none">
                            View all <MdKeyboardArrowRight />
                        </a>
                    </div>

                    <Row className="g-4">

                        {/* PRODUCT 1 */}
                        <Col xs={6} md={3}>
                            <Card className="border-0 h-100">

                                {/* IMAGE 1 */}
                                <div
                                    className="bg-light rounded-4 d-flex align-items-center justify-content-center"
                                    style={{ height: "180px" }}
                                >
                                    <img
                                        src={grocery26}
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
                                        $2.15
                                    </h5>

                                    <Card.Title className="fs-6">
                                        Muesli Fitness Energy,
                                        <br />
                                        gluten free
                                    </Card.Title>

                                    <small className="text-secondary">
                                        500g
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
                                        src={grocery01}
                                        alt="Fresh orange"
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
                                        $3.12
                                    </h5>

                                    <Card.Title className="fs-6">
                                        Fresh orange
                                        <br />
                                        Klementina, Spain
                                    </Card.Title>

                                    <small className="text-secondary">
                                        1kg
                                    </small>

                                </Card.Body>

                            </Card>
                        </Col>


                        {/* PRODUCT 3 */}
                        <Col xs={6} md={3}>
                            <Card className="border-0 h-100">

                                {/* IMAGE 3*/}
                                <div
                                    className="bg-light rounded-4 d-flex align-items-center justify-content-center"
                                    style={{ height: "180px" }}
                                >
                                    <img
                                        src={grocery28}
                                        alt="Pepsi soda"
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
                                        $0.80
                                    </h5>

                                    <Card.Title className="fs-6">
                                        Pepsi soda
                                        <br />
                                        classic, can
                                    </Card.Title>

                                    <small className="text-secondary">
                                        330ml
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
                                        src={grocery29}
                                        alt="Mozzarella cheese"
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
                                        $2.99
                                    </h5>

                                    <Card.Title className="fs-6">
                                        Mozzarella mini
                                        <br />
                                        cheese Granaloro
                                    </Card.Title>

                                    <small className="text-secondary">
                                        250g
                                    </small>

                                </Card.Body>

                            </Card>
                        </Col>

                        {/* PRODUCT 5 */}
                        <Col xs={6} md={3}>
                            <Card className="border-0 h-100">

                                {/* IMAGE 5 */}
                                <div
                                    className="bg-light rounded-4 d-flex align-items-center justify-content-center"
                                    style={{ height: "180px" }}
                                >
                                    <img
                                        src={grocery30}
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
                                        $1.24
                                    </h5>

                                    <Card.Title className="fs-6">
                                        Coconut,
                                        <br />Indonesia
                                    </Card.Title>

                                    <small className="text-secondary">
                                        1 coconut
                                    </small>

                                </Card.Body>

                            </Card>
                        </Col>


                        {/* PRODUCT 6 */}
                        <Col xs={6} md={3}>
                            <Card className="border-0 h-100">

                                {/* IMAGE 6 */}
                                <div
                                    className="bg-light rounded-4 d-flex align-items-center justify-content-center"
                                    style={{ height: "180px" }}
                                >
                                    <img
                                        src={grocery02}
                                        alt="Fresh orange"
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
                                        $3.95
                                    </h5>
                                    <Card.Title className="fs-6">
                                        Pesto sauce Barilla with
                                        <br />
                                        parmesan and basil
                                    </Card.Title>

                                    <small className="text-secondary">
                                        200kg
                                    </small>

                                </Card.Body>

                            </Card>
                        </Col>


                        {/* PRODUCT 7 */}
                        <Col xs={6} md={3}>
                            <Card className="border-0 h-100">

                                {/* IMAGE 7 */}
                                <div
                                    className="bg-light rounded-4 d-flex align-items-center justify-content-center"
                                    style={{ height: "180px" }}
                                >
                                    <img
                                        src={grocery32}
                                        alt="Pepsi soda"
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
                                        $1.99
                                    </h5>

                                    <Card.Title className="fs-6">
                                        Fresh mango,
                                        <br /> Spain
                                    </Card.Title>

                                    <small className="text-secondary">
                                        1 mango
                                    </small>

                                </Card.Body>

                            </Card>
                        </Col>


                        {/* PRODUCT 8 */}
                        <Col xs={6} md={3}>
                            <Card className="border-0 h-100">

                                {/* IMAGE 8 */}
                                <div
                                    className="bg-light rounded-4 d-flex align-items-center justify-content-center"
                                    style={{ height: "180px" }}
                                >
                                    <img
                                        src={grocery33}
                                        alt="Mozzarella cheese"
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
                                        $2.40
                                    </h5>

                                    <Card.Title className="fs-6">
                                        Fresh green asparagus,
                                        <br />
                                        bunch
                                    </Card.Title>

                                    <small className="text-secondary">
                                        300g
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

export default CategoriesPopularProducts;