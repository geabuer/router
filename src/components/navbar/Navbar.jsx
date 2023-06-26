import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Navbars = () => {
  return (
    <Navbar bg="danger" variant="light">
      <Container>
        <Nav>
           <Link to="/" className="text-light text-decoration-none">
           🏚️ Home
          </Link>
          <Link to="/contacto" className="ms-4 text-light text-decoration-none">
           📨  Contacto
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbars;
