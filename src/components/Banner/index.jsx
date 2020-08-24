import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import RentForm from "../Form/Rent";
import carImage from "../../assets/car_image.jpg";

import "./banner_styles.css";

export default function Banner() {
  const [img, setImage] = React.useState(carImage);
  const [message, setMessage] = React.useState("");
  const [warning, setWarning] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const handleWarning = (msg) => {
    setMessage(msg);
    setWarning(true);
    setTimeout(() => {
      setWarning(false);
    }, 2000);
  };

  const handleSuccess = () => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };

  const changeImage = (image) => {
    setImage(image);
  };

  const props = {
    handleWarning,
    handleSuccess,
    changeImage,
  };

  return (
    <Container>
      <Alert
        show={warning}
        variant="warning"
        onClose={() => setWarning(false)}
        dismissible
      >
        {message}
      </Alert>
      <Alert
        show={success}
        variant="success"
        onClose={() => setSuccess(false)}
        dismissible
      >
        La reserva se realizó satisfactoriamente!
      </Alert>
      <Row>
        <Col lg={5}>
          <Card>
            <Card.Body>
              <Card.Title className="form_title">
                ¡Alquila un carro rápido y fácil!
              </Card.Title>
              <RentForm {...props} />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={1} />
        <Col lg={5} className="banner_image_col">
          <Image src={img} fluid />
        </Col>
      </Row>
    </Container>
  );
}
