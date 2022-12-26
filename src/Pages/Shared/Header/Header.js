import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/Logo2.svg";

const Header = () => {
  return (
    <Navbar
      style={{ background: "#4141ff", fontWeight: "500" }}
      expand="lg"
      sticky="top"
      className="px-3  shadow-sm"
    >
      <Navbar.Brand
        as={Link}
        to="/home"
        className=""
        style={{ fontSize: "24px" }}
      >
        <img width={"100px"} src={logo} alt="AUTOFIX" />
      </Navbar.Brand>
      <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="d-flex gap-md-4 ms-auto me-5">
          <Nav.Link
            as={Link}
            to="home"
            className="text-white"
            style={{ fontSize: "18px" }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="services"
            className="fw-medium text-white"
            style={{ fontSize: "18px" }}
          >
            Services
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="experts"
            className="font-weight-bold text-white"
            style={{ fontSize: "18px" }}
          >
            Experts
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="about"
            className="font-weight-bold text-white"
            style={{ fontSize: "18px" }}
          >
            About
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="contact"
            className="font-weight-bold text-white"
            style={{ fontSize: "18px" }}
          >
            Contact
          </Nav.Link>
        </Nav>
        {/* <Form className="d-flex">
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2 ms-2 me-2"
          />
          <Button variant="outline-info">Search</Button>
        </Form> */}
        <Nav className="ml-auto gap-3">
          <Nav.Link
            as={Link}
            to="login"
            className="fw-bold text-white btn btn-outline-info"
            style={{ fontSize: "18px" }}
          >
            Login
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="signup"
            className="fw-bold text-white btn btn-outline-info"
            style={{ fontSize: "18px" }}
          >
            Sign Up
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
