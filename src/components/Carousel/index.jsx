import React from "react";
import Carousel from "react-multi-carousel";
import Card from "react-bootstrap/Card";

import "./carousel_styles.css";
import "react-multi-carousel/lib/styles.css";
import data from "../../data/cars_dummy_data.json";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1400 },
    items: 5,
    slidesToSlide: 5, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1400, min: 464 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
};

export default function RentCarousel() {
  return (
    <Carousel responsive={responsive}>
      {data.map((car) => (
        <Card className="carousel_card">
          <Card.Img
            className="carousel_card_image"
            variant="top"
            src={car.image}
          />
          <Card.Body>
            <Card.Title>{car.model}</Card.Title>
            <Card.Text>Por solo ${car.rent_price} + seguro</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Carousel>
  );
}
