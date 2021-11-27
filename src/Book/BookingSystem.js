import React, { useState } from "react";
import { Form, Col, Row, Button, Container } from "react-bootstrap";
import emailjs from "emailjs-com";

function BookingSystem() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_6xynvlo",
        "template_7uqv4f9",
        e.target,
        "user_BrDtt82HzGrOkVPrnVdy4"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
    alert("Booking has been confirmed you will be contacted asap!!");
    window.location.reload();
  };
  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
            <Form.Control required type="text" name="name" placeholder="Name" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              required
              type="text"
              name="phone"
              placeholder="Phone"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="text"
              name="email"
              placeholder="Email"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" name="city" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              placeholder="State"
              name="state"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" name="zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom06">
            <Form.Label>Select Date</Form.Label>
            <Form.Control type="date" name="date" placeholder="Date of Event" />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom07">
            <Form.Label>Event Type</Form.Label>
            <Form.Control
              type="text"
              placeholder="Event Type E.g (Wedding...)"
              name="event"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom07">
            <Form.Label>ContactType</Form.Label>
            <Form.Control
              type="text"
              placeholder="How to contact you? (Email,Text,Call)"
              name="contact-type"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Container
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginTop: "10px",
          }}
        >
          <Button variant="outline-primary" type="Submit" value="Send">
            Book Now
          </Button>
        </Container>
      </Form>
    </div>
  );
}

export default BookingSystem;
