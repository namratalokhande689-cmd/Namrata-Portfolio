import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { MdKeyboardArrowRight } from "react-icons/md";
import {
  LuClock3,
  LuZap,
  LuConciergeBell
} from "react-icons/lu";

import grocery39 from "../assets/grocery39.jpg";
import grocery40 from "../assets/grocery40.jpg";
import grocery41 from "../assets/grocery41.jpg";
import grocery42 from "../assets/grocery42.jpg";

function RecipesCards() {
  return (
    <Container fluid className="px-4 px-md-5 py-5">

      {/* SECTION HEADING */}
      <h1 className="fw-bold mb-4">
        Recipes
      </h1>

      {/* MAIN ROW */}
      <Row className="g-5">

        {/* ================= LEFT SIDE - RECIPES ================= */}
        <Col xs={12} lg={5}>

          {/* RECIPE 1 */}
          <Row className="align-items-center g-4 mb-5">

            <Col xs={5}>
              <img
                src={grocery39}
                alt="Garden salad"
                className="img-fluid rounded-4 w-100"
                style={{
                  height: "210px",
                  objectFit: "cover"
                }}
              />
            </Col>

            <Col xs={7}>

              <h5 className="fw-semibold mb-4">
                Garden salad with a mix of
                lettuce, cucumber and tomato
              </h5>

              <div className="d-flex flex-wrap gap-3 text-secondary">

                <span className="d-flex align-items-center gap-2">
                  <LuClock3 size={22} />
                  30 min
                </span>

                <span className="d-flex align-items-center gap-2">
                  <LuZap size={22} />
                  Easy
                </span>

                <span className="d-flex align-items-center gap-2">
                  <LuConciergeBell size={22} />
                  4 por
                </span>

              </div>

            </Col>

          </Row>


          {/* RECIPE 2 */}
          <Row className="align-items-center g-4 mb-5">

            <Col xs={5}>
              <img
                src={grocery40}
                alt="Raspberry fresh lemonade"
                className="img-fluid rounded-4 w-100"
                style={{
                  height: "210px",
                  objectFit: "cover"
                }}
              />
            </Col>

            <Col xs={7}>

              <h5 className="fw-semibold mb-4">
                Raspberry fresh lemonade with
                lemon, strawberry syrup and mint
              </h5>

              <div className="d-flex flex-wrap gap-3 text-secondary">

                <span className="d-flex align-items-center gap-2">
                  <LuClock3 size={22} />
                  50 min
                </span>

                <span className="d-flex align-items-center gap-2">
                  <LuZap size={22} />
                  Hard
                </span>

                <span className="d-flex align-items-center gap-2">
                  <LuConciergeBell size={22} />
                  8 por
                </span>

              </div>

            </Col>

          </Row>


          {/* RECIPE 3 */}
          <Row className="align-items-center g-4 mb-4">

            <Col xs={5}>
              <img
                src={grocery41}
                alt="Penne pasta"
                className="img-fluid rounded-4 w-100"
                style={{
                  height: "210px",
                  objectFit: "cover"
                }}
              />
            </Col>

            <Col xs={7}>

              <h5 className="fw-semibold mb-4">
                Penne pasta with spinach and
                zucchini in a creamy sauce
              </h5>

              <div className="d-flex flex-wrap gap-3 text-secondary">

                <span className="d-flex align-items-center gap-2">
                  <LuClock3 size={22} />
                  25 min
                </span>

                <span className="d-flex align-items-center gap-2">
                  <LuZap size={22} />
                  Easy
                </span>

                <span className="d-flex align-items-center gap-2">
                  <LuConciergeBell size={22} />
                  2 por
                </span>

              </div>

            </Col>

          </Row>


          {/* VIEW ALL */}
          <a
            href="#"
            className="text-dark text-decoration-none fs-5 d-inline-flex align-items-center mt-3"
          >
            View all
            <MdKeyboardArrowRight size={25} />
          </a>

        </Col>


        {/* ================= RIGHT SIDE - COOKBOOK ================= */}
        <Col xs={12} lg={7}>

          <div
            className="border rounded-4 p-4 p-md-5 h-100"
            style={{
              minHeight: "700px"
            }}
          >

            <Row className="align-items-center h-100 g-5">

              {/* COOKBOOK IMAGE */}
              <Col xs={12} md={6}>

                <img
                  src={grocery42}
                  alt="The Best in Gastronomy"
                  className="img-fluid rounded-4 w-100"
                  style={{
                    height: "600px",
                    objectFit: "cover"
                  }}
                />

              </Col>


              {/* COOKBOOK DETAILS */}
              <Col xs={12} md={6}>

                {/* CATEGORY */}
                <span className="badge rounded-pill bg-light text-dark fs-6 fw-normal px-3 py-2 mb-4">
                  Cookbook
                </span>

                {/* TITLE */}
                <h2 className="fw-bold mb-4">
                  The Best in Gastronomy
                </h2>

                {/* AUTHOR */}
                <p className="fs-5 mb-4">
                  <span className="text-secondary">
                    Author:
                  </span>{" "}
                  Dana Chambers
                </p>

                {/* DESCRIPTION */}
                <p className="text-secondary fs-5 lh-lg mb-4">
                  An exquisite cookbook that takes readers
                  on a culinary journey around the world.
                  With stunning photography and detailed
                  instructions ...
                </p>

                {/* PRICE */}
                <h2 className="fw-bold mb-4">
                  $12.40
                </h2>

                {/* BUTTON */}
                <Button
                  variant="dark"
                  className="rounded-pill px-4 py-3 fs-5"
                >
                  Shop book
                  <MdKeyboardArrowRight size={24} />
                </Button>

              </Col>

            </Row>

          </div>

        </Col>

      </Row>

    </Container>
  );
}

export default RecipesCards;