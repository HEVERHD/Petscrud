import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../assets/imgbody.jpg";

import "../css/app.css";

export const Landing = () => {
  return (
    <div className="back">
      <img src={img} alt="img" className="img-fluid img" />
      <h1 className="shawow-sm tex-success mt-5 p-3 text-center rounded init">
        {" "}
        Welcome to Pet's World
      </h1>
      <Container>
        <Row>
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <div className=" text-center">
              <button className="btn btn-success">
                <Link to="/petslist">
                  <b className="text-white">Start</b>
                </Link>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
