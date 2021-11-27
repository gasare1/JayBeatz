import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AboutBg } from "./AboutElements";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import image from "../Images/jay.beatz2.jpg";
import "bootstrap/dist/css/bootstrap.min.css"
function About() {
  return (
    <AboutBg>
      <MDBCard style={{ width: "60vw" }} className="shadow-lg p-3 mb-5 bg-white rounded">
        <MDBCardImage src={image} position="top" alt="..." />
        <MDBCardBody>
          <MDBCardTitle
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            About Me
          </MDBCardTitle>
          <MDBCardText
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </AboutBg>
  );
}

export default About;
