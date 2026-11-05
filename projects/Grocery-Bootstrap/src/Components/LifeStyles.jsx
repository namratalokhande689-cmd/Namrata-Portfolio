import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { TbWheat } from "react-icons/tb";
import { GiBroccoli } from "react-icons/gi";
import { LuLeaf } from "react-icons/lu";
import { CiAvocado } from "react-icons/ci";

function Lifestyles() {
  return (
    <Container fluid className="px-4 px-md-5 py-5">

      {/* HEADING */}
      <h2 className="fw-bold text-center mb-5">
        Shop by lifestyle
      </h2>

      <Row className="g-4">

        {/* GLUTEN-FREE */}
        <Col xs={12} sm={6} lg={3}>
          <div className="text-center">

            <div
              className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
              style={{
                width: "280px",
                height: "280px",
                backgroundColor: "#fff1e5"
              }}
            >
              <TbWheat
                size={105}
                color="#20252d"
              />
            </div>

            <h4 className="fw-bold mt-4">
              Gluten-Free
            </h4>

            <p className="text-secondary fs-5">
              Foods that don't contain gluten
            </p>

          </div>
        </Col>


        {/* VEGAN */}
        <Col xs={12} sm={6} lg={3}>
          <div className="text-center">

            <div
              className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
              style={{
                width: "280px",
                height: "280px",
                backgroundColor: "#eaf7f0"
              }}
            >
              <GiBroccoli
                size={105}
                color="#20252d"
              />
            </div>

            <h4 className="fw-bold mt-4">
              Vegan
            </h4>

            <p className="text-secondary fs-5">
              Vegetable based goodness
            </p>

          </div>
        </Col>


        {/* PLANT BASED */}
        <Col xs={12} sm={6} lg={3}>
          <div className="text-center">

            <div
              className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
              style={{
                width: "280px",
                height: "280px",
                backgroundColor: "#eaf1fc"
              }}
            >
              <LuLeaf
                size={105}
                color="#20252d"
              />
            </div>

            <h4 className="fw-bold mt-4">
              Plant based
            </h4>

            <p className="text-secondary fs-5">
              Based on herbal ingredients
            </p>

          </div>
        </Col>


        {/* KETO */}
        <Col xs={12} sm={6} lg={3}>
          <div className="text-center">

            <div
              className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
              style={{
                width: "280px",
                height: "280px",
                backgroundColor: "#fdeced"
              }}
            >
              <CiAvocado
                size={105}
                color="#20252d"
              />
            </div>

            <h4 className="fw-bold mt-4">
              Keto
            </h4>

            <p className="text-secondary fs-5">
              Good fats served in food
            </p>

          </div>
        </Col>

      </Row>

    </Container>
  );
}

export default Lifestyles;