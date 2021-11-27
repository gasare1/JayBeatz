import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BookBg,BookCard } from "./BookElements";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import image from "../Components/Images/studiocard.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import studio from "../Components/Images/headset.jpeg";
import { Button } from "react-bootstrap";
import BookingSystem from "./BookingSystem";
function Book() {
  return (
    <BookBg id='book' style={{ backgroundImage: `url(${studio})` }}>
      <BookCard>
      <MDBCard
        style={{ width: "60vw", marginTop: "10rem" }}
        className="shadow-lg p-3 mb-5 bg-white rounded"
      >
        <MDBCardTitle
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          Bookings
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
        <BookingSystem />
        <MDBCardBody></MDBCardBody>
      </MDBCard>
      </BookCard>
    </BookBg>
  );
}

export default Book;
