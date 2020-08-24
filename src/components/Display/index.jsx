import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import "./display_form_styles.css";

export default function FormDisplay(props) {
  const { reserve } = props;

  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} className="display_form_group_col">
          <Form.Label className="display_form_label">Fecha de Alquiler</Form.Label>{" "}
          <Form.Control
            type="date"
            plaintext
            readOnly
            disabled
            defaultValue={reserve.start}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} className="display_form_group_col">
          <Form.Label className="display_form_label">Fecha de Devolución</Form.Label>{" "}
          <Form.Control
            type="date"
            plaintext
            readOnly
            disabled
            defaultValue={reserve.end}
          />
        </Form.Group>
      </Form.Row>

      <Form.Group>
        <Form.Label className="display_form_label">Modelo de Carro</Form.Label>
        <Form.Control
          type="text"
          plaintext
          readOnly
          disabled
          defaultValue={reserve.car_model}
        ></Form.Control>
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label className="display_form_label">Lugar de retiro</Form.Label>
          <Form.Control
            type="text"
            plaintext
            readOnly
            disabled
            defaultValue={reserve.rent_place}
          ></Form.Control>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label className="display_form_label">Hora de retiro</Form.Label>
          <Form.Control
            type="text"
            plaintext
            readOnly
            disabled
            defaultValue={reserve.rent_time}
          ></Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label className="display_form_label">Lugar de devolución</Form.Label>
          <Form.Control
            type="text"
            plaintext
            readOnly
            disabled
            defaultValue={reserve.return_place}
          ></Form.Control>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label className="display_form_label">Hora de devolución</Form.Label>
          <Form.Control
            type="text"
            plaintext
            readOnly
            disabled
            defaultValue={reserve.return_time}
          ></Form.Control>
        </Form.Group>
      </Form.Row>
    </Form>
  );
}
