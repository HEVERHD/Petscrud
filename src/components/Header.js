import React from "react";
import { Link } from "react-router-dom";

//components

//Boostrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link className="navbar-brand" to="/">
          {" "}
          Pet's World{" "}
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-link" to="/petslist">
              Pets List
            </Link>
            <Link className="nav-link" to="/create">
              Create Pet
            </Link>
          </Nav>
          <Link className="nav-link btn btn-secondary btn-sm" to="/about">
            About
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
