import { useState } from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoGridOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { HiSun } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlinePercentage } from "react-icons/ai";
import grocery06 from "../assets/grocery06.png";
import grocery07 from "../assets/grocery07.png";
import grocery08 from "../assets/grocery08.png";
import grocery09 from "../assets/grocery09.png";
import grocery10 from "../assets/grocery10.png";
import grocery11 from "../assets/grocery11.png";


function NavbarComponent() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <>
      {/* ================= MAIN NAVBAR ================= */}

      <Navbar bg="white"
        className="border-bottom py-3 main-navbar">
        <Container fluid className="px-4">

          {/* Menu + Logo */}
          <div className="d-flex align-items-center">

            <Button
              variant="link"
              className="text-dark text-decoration-none p-0 me-4 fs-3"
            >
              ☰
            </Button>

            <Navbar.Brand
              href="#"
              className="fw-bold text-dark mb-0 fs-2"
            >
              Cartzilla
            </Navbar.Brand>

          </div>


          {/* ================= CATEGORIES ================= */}

          <NavDropdown
            title={
              <span className="fs-5">
                <IoGridOutline />
                &nbsp; Categories
              </span>
            }
            id="categories-dropdown"
            className="ms-4"
            menuVariant="light"
          >

            {/* Mega Menu */}
            <div
              style={{
                width: "1100px",
                maxWidth: "90vw",
                padding: "30px",
              }}
            >

              <Row>

                {/* COLUMN 1 */}
                <Col md={3}>

                  <h5 className="fw-bold mb-3">
                    Bakery & bread
                  </h5>

                  <p className="mb-3 text-secondary">
                    Shop all
                  </p>

                  <p className="mb-3 text-secondary">
                    Bread
                  </p>

                  <p className="mb-3 text-secondary">
                    Pastries
                  </p>

                  <p className="mb-3 text-secondary">
                    Bakery cookies
                  </p>

                  <p className="mb-3 text-secondary">
                    Cupcakes
                  </p>

                  <p className="mb-4 text-secondary">
                    Buns & rolls
                  </p>


                  <h5 className="fw-bold mb-3">
                    Meat products
                  </h5>

                  <p className="mb-3 text-secondary">
                    Shop all
                  </p>

                  <p className="mb-3 text-secondary">
                    Fresh meat
                  </p>

                  <p className="mb-3 text-secondary">
                    Processed meat
                  </p>

                  <p className="mb-3 text-secondary">
                    Seafood
                  </p>

                  <p className="mb-3 text-secondary">
                    Poultry products
                  </p>

                  <p className="mb-0 text-secondary">
                    Prepared meat
                  </p>

                </Col>


                {/* COLUMN 2 */}
                <Col md={3}>

                  <h5 className="fw-bold mb-3">
                    Vegetables
                  </h5>

                  <p className="mb-3 text-secondary">
                    Shop all
                  </p>

                  <p className="mb-3 text-secondary">
                    Leafy greens
                  </p>

                  <p className="mb-3 text-secondary">
                    Root vegetables
                  </p>

                  <p className="mb-3 text-secondary">
                    Allium vegetables
                  </p>

                  <p className="mb-3 text-secondary">
                    Peppers and tomatoes
                  </p>

                  <p className="mb-3 text-secondary">
                    Cruciferous
                  </p>

                  <p className="mb-3 text-secondary">
                    Seasonal squashes
                  </p>

                  <p className="mb-4 text-secondary">
                    Beans, peas & lentils
                  </p>


                  <h5 className="fw-bold mb-3">
                    Sauces and ketchup
                  </h5>

                  <p className="mb-3 text-secondary">
                    Shop all
                  </p>

                  <p className="mb-3 text-secondary">
                    Tomato-based sauces
                  </p>

                  <p className="mb-3 text-secondary">
                    Salad dressing
                  </p>

                  <p className="mb-0 text-secondary">
                    Hot sauces
                  </p>

                </Col>


                {/* COLUMN 3 */}
                <Col md={3}>

                  <h5 className="fw-bold mb-3">
                    Fresh fruits
                  </h5>

                  <p className="mb-3 text-secondary">
                    Shop all
                  </p>

                  <p className="mb-3 text-secondary">
                    Citrus fruits
                  </p>

                  <p className="mb-3 text-secondary">
                    Berries
                  </p>

                  <p className="mb-3 text-secondary">
                    Tropical fruits
                  </p>

                  <p className="mb-3 text-secondary">
                    Stone fruits
                  </p>

                  <p className="mb-3 text-secondary">
                    Exotic fruits
                  </p>

                  <p className="mb-4 text-secondary">
                    Melons
                  </p>


                  <h5 className="fw-bold mb-3">
                    Italian dinner
                  </h5>

                  <p className="mb-3 text-secondary">
                    Shop all
                  </p>

                  <p className="mb-3 text-secondary">
                    Pasta & sauces
                  </p>

                  <p className="mb-3 text-secondary">
                    Italian cheese
                  </p>

                  <p className="mb-3 text-secondary">
                    Italian meats
                  </p>

                  <p className="mb-0 text-secondary">
                    Desserts & beverages
                  </p>

                </Col>


                {/* COLUMN 4 */}
                <Col md={3}>

                  <h5 className="fw-bold mb-3">
                    Beverages
                  </h5>

                  <p className="mb-3 text-secondary">
                    Shop all
                  </p>

                  <p className="mb-3 text-secondary">
                    Soft drinks
                  </p>

                  <p className="mb-3 text-secondary">
                    Juices
                  </p>

                  <p className="mb-3 text-secondary">
                    Sports & energy drinks
                  </p>

                  <p className="mb-3 text-secondary">
                    Tea and coffee
                  </p>

                  <p className="mb-4 text-secondary">
                    Alcoholic beverages
                  </p>


                  <h5 className="fw-bold mb-3">
                    Dairy & eggs
                  </h5>

                  <p className="mb-3 text-secondary">
                    Shop all
                  </p>

                  <p className="mb-3 text-secondary">
                    Cheese
                  </p>

                  <p className="mb-3 text-secondary">
                    Milk & yogurt
                  </p>

                  <p className="mb-3 text-secondary">
                    Sour cream
                  </p>

                  <p className="mb-3 text-secondary">
                    Eggs
                  </p>

                  <p className="mb-0 text-secondary">
                    Butter & margarine
                  </p>

                </Col>

              </Row>

            </div>

          </NavDropdown>


          {/* ================= SEARCH ================= */}

          <Form
            onSubmit={handleSearch}
            className="flex-grow-1 mx-4"
          >

            <InputGroup>

              <Form.Control
                type="search"
                placeholder="Search for products"
                value={searchTerm}
                onChange={(e) =>
                  setSearchTerm(e.target.value)
                }
                className="rounded-pill py-3"
              />

              <Button
                variant="link"
                className="text-dark position-absolute end-0 top-50 translate-middle-y me-3"
                type="submit"
              >
                <FaSearch />
              </Button>

            </InputGroup>

          </Form>


          {/* ================= RIGHT SIDE ================= */}

          <div className="d-flex align-items-center">

            {/* Delivery */}
            <div className="me-4 d-none d-xl-block">
              <NavDropdown
                title={
                  <span>
                    <strong>Delivery</strong>
                    <br />
                    <small className="text-secondary">
                      Set Your Address
                    </small>
                  </span>
                }
                id="delivery-dropdown"
              >
                <NavDropdown.Item href="#">
                  Set Your Address
                </NavDropdown.Item>

                <NavDropdown.Item href="#">
                  Change Address
                </NavDropdown.Item>
              </NavDropdown>
            </div>


            {/* Theme */}
            <Button
              variant="link"
              className="text-dark text-decoration-none fs-4"
            ><HiSun />
            </Button>


            {/* Account */}
            <Button
              variant="link"
              className="text-dark text-decoration-none fs-4"
            ><FaRegUser />
            </Button>


            {/* Cart */}
            <Button
              variant="link"
              className="text-dark text-decoration-none position-relative fs-4"
            >
              <FaShoppingCart />
              <Badge
                bg="danger"
                pill
                className="position-absolute top-0 start-100 translate-middle"
              >
                8
              </Badge>
            </Button>
          </div>
        </Container>
      </Navbar>


      {/* ================= CATEGORY ================= */}
      <Navbar
        bg="white"
        className="border-bottom"
      >

        <Container fluid className="px-4">

          <div className="d-flex justify-content-between w-100 overflow-auto">

            <Button
              variant="link"
              className="text-dark text-decoration-none text-nowrap"
            ><AiOutlinePercentage />
              &nbsp; Weekly sale
            </Button>

           <Button variant="link"
              className="text-dark text-decoration-none text-nowrap"
            ><img
              src={grocery06}
              alt="vegetables"
              className="me-3"
              style={{
                width: "50px",
                height: "50px",
                objectFit: "contain"
              }}
            /> Vegetables</Button>

          <Button variant="link"
              className="text-dark text-decoration-none text-nowrap"
            ><img
              src={grocery07}
              alt="easter"
              className="me-3"
              style={{
                width: "50px",
                height: "50px",
                objectFit: "contain"
              }}
            /> Easter is coming </Button>
          

           <Button variant="link"
              className="text-dark text-decoration-none text-nowrap"
            ><img
              src={grocery08}
              alt="Meat"
              className="me-3"
              style={{
                width: "50px",
                height: "50px",
                objectFit: "contain"
              }}
            />Poultry Meat </Button>

             <Button variant="link"
              className="text-dark text-decoration-none text-nowrap"
            ><img
              src={grocery09}
              alt="Fruits"
              className="me-3"
              style={{
                width: "50px",
                height: "50px",
                objectFit: "contain"
              }}
            /> Fresh Fruits </Button>
          
           <Button variant="link"
              className="text-dark text-decoration-none text-nowrap"
            ><img
              src={grocery10}
              alt="Patrick's day"
              className="me-3"
              style={{
                width: "50px",
                height: "50px",
                objectFit: "contain"
              }}
            /> St.Patrick's Day </Button>

           <Button variant="link"
              className="text-dark text-decoration-none text-nowrap"
            ><img
              src={grocery11}
              alt="coconut"
              className="me-3"
              style={{
                width: "50px",
                height: "50px",
                objectFit: "contain"
              }}
            />Coconut </Button>
          </div>


        </Container>

      </Navbar>

    </>
  );
}

export default NavbarComponent;