import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import nopets from "../assets/nopets.gif";
import "../css/app.css";

export const NoPets = () => {
  return (
    <div className="container">
      <Row>
        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
          <div className=" text-center">
            <img src={nopets} alt="img" className="img-fluid img" />
            <h2 className="shawow-sm tex-success mt-5 p-3 text-center rounded init">
              {" "}
              Please Add a Pet ! <br />
            </h2>
            <Container>
              <Row>
                <Col
                  lg={5}
                  md={6}
                  sm={12}
                  className="p-5 m-auto shadow-sm rounded-lg"
                ></Col>
                <div className=" text-center">
                  <button className="btn btn-success">
                    <Link to="/create">
                      <b className="text-white"> Create New Pet </b>
                    </Link>
                  </button>
                </div>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
    </div>
  );
};
