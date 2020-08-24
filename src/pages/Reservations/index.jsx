import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ReservationsList from "../../components/ReservationsList";
import Col from "react-bootstrap/Col";

import "./reservations_styles.css";

export default function Reservations() {
  return (
    <Container className="reservations_container">
      <Row>
        <Col>
          <h1>Mis reservas</h1>
        </Col>
      </Row>
      <Row className="reservations_list_row">
        <ReservationsList />
      </Row>
    </Container>
  );
}
