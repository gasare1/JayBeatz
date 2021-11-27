import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CollabBg } from "./CollabElements";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import image from "../Images/studiocard.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import studio from "../Images/studio.jpeg";
import { Button } from "react-bootstrap";
function Collab() {
  return (
    <CollabBg style={{ backgroundImage: `url(${studio})` }} id="collab">
      <MDBCard
        style={{ width: "60vw", marginTop: "10rem" }}
        className="shadow-lg p-3 mb-5 bg-white rounded"
      >
        <MDBCardImage src={image} position="top" alt="..." />
        <MDBCardBody>
          <MDBCardTitle
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            Collaborate
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
          <Container style={{justifyContent:'center',alignItems:'center',display:'flex'}}>
            <Button variant="outline-primary" href = "mailto: jaybeatzrec@gmail.com" >Contact Me</Button>
          </Container>
        </MDBCardBody>
      </MDBCard>
    </CollabBg>
  );
}

export default Collab;
