import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <>
      <Container>
        <Row>
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <h1 className="shawow-sm tex-success mt-5 p-3 text-center rounded">
              {" "}
              Welcome to Pet's World
              <button className="btn btn-success">
                <Link to="/petslist">
                  <b className="text-white">Start</b>
                </Link>
              </button>
            </h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};
