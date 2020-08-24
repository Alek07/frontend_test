import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "../../components/Carousel";
import Banner from "../../components/Banner";

import './home_styles.css'

export default function Home() {
  return (
    <Container fluid>
      <Row className="banner_row">
        <Banner/>
      </Row>
      <Row>
        <Col className="car_carousel_col">
          <h2>Carros Disponibles</h2>
          <Carousel />
        </Col>
      </Row>
    </Container>
  );
}
