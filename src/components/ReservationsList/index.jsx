import React from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import FormDisplay from "../Display";
import Button from "react-bootstrap/Button";
import { Store } from "../../store";
import { removeReservation } from "../../store/actions";
import Row from "react-bootstrap/Row";

import "./reservation_list_styles.css";

export default function Reservations() {
  const { state, dispatch } = React.useContext(Store);

  const handleRemove = (index) => {
    removeReservation(state, index, dispatch);
  };

  return (
    <div>
      {state.user_reservations.length > 0 ? (
        <Accordion className="reservation_list_accordion">
          {state.user_reservations.map((reserve, index) => (
            <Card key={index}>
              <Card.Header>
                <Row>
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    className="reservation_list_title"
                    eventKey={index.toString()}
                  >
                    <h2>
                      Reserva: {reserve.car_company} {reserve.car_model}
                    </h2>
                  </Accordion.Toggle>
                  <div className="reservation_list_space"></div>
                  <h4 className="reservation_list_total">
                    Total: ${reserve.total}.00{" "}
                  </h4>
                </Row>
                <Row className="reservation_list_button_row">
                  <Button
                    variant="danger"
                    type="button"
                    onClick={() => handleRemove(index)}
                  >
                    Eliminar Reserva
                  </Button>
                </Row>
              </Card.Header>
              <Accordion.Collapse eventKey={index.toString()}>
                <Card.Body>
                  <FormDisplay reserve={reserve} />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      ) : (
        <h2>Sin reservaciones</h2>
      )}
    </div>
  );
}
