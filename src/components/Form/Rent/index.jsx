import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Store } from "../../../store";
import { addReservation } from "../../../store/actions";

import "./rent_form_styles.css";
import data from "../../../data/cars_dummy_data.json";
import times from "../../../data/offices_schedules.json";
import offices from "../../../data/rent_car_offices.json";

const formObjt = {
  start: "",
  end: "",
  car_model: "",
  rent_place: "",
  rent_time: "",
  return_place: "",
  return_time: "",
};

export default function RentForm(props) {
  const { handleSuccess, handleWarning, changeImage } = props;
  const { dispatch } = React.useContext(Store);
  const [form, setForm] = React.useState(formObjt);

  const validateDates = (startDate, endDate) => {
    if (new Date(startDate) <= new Date(endDate)) return true;
    return false;
  };

  const onSubmit = () => {
    const isValidForm = Object.values(form).every((value) => value !== "");
    const isValidDates = validateDates(form.start, form.end);

    if (isValidForm) {
      if (isValidDates) {
        addReservation(form, data, dispatch);
        setForm(formObjt);
        handleSuccess();
      } else {
        handleWarning(
          "La fecha de retorno no puede ser antes de la fecha de alquiler"
        );
      }
    } else {
      handleWarning("No deje espacios en blanco");
    }
  };

  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} className="rent_form_group_col">
          <Form.Label>Fecha de Alquiler</Form.Label>{" "}
          <Form.Control
            type="date"
            value={form.start}
            onChange={(event) =>
              setForm({ ...form, start: event.target.value })
            }
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} className="rent_form_group_col">
          <Form.Label>Fecha de Devolución</Form.Label>{" "}
          <Form.Control
            type="date"
            value={form.end}
            onChange={(event) => setForm({ ...form, end: event.target.value })}
          />
        </Form.Group>
      </Form.Row>

      <Form.Group>
        <Form.Label>Modelo de Carro</Form.Label>
        <Form.Control
          as="select"
          value={form.car_model}
          onChange={(event) => {
            setForm({ ...form, car_model: event.target.value });
            event.target.value &&
              changeImage(data[event.target.value - 1].image);
          }}
        >
          <option value={null}></option>
          {data.map((car) => (
            <option value={car.id} key={car.id}>
              {car.model}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Lugar de retiro</Form.Label>
          <Form.Control
            as="select"
            value={form.rent_place}
            onChange={(event) =>
              setForm({ ...form, rent_place: event.target.value })
            }
          >
            <option></option>
            {offices.map((office) => (
              <option key={office.id}>{office.name}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Hora de retiro</Form.Label>
          <Form.Control
            as="select"
            value={form.rent_time}
            onChange={(event) =>
              setForm({ ...form, rent_time: event.target.value })
            }
          >
            <option></option>
            {times.map((time) => (
              <option key={time.id}>{time.time}</option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Lugar de devolución</Form.Label>
          <Form.Control
            as="select"
            value={form.return_place}
            onChange={(event) =>
              setForm({ ...form, return_place: event.target.value })
            }
          >
            <option></option>
            {offices.map((office) => (
              <option key={office.id}>{office.name}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Hora de devolución</Form.Label>
          <Form.Control
            as="select"
            value={form.return_time}
            onChange={(event) =>
              setForm({ ...form, return_time: event.target.value })
            }
          >
            <option></option>
            {times.map((time) => (
              <option key={time.id}>{time.time}</option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Button variant="primary" type="button" onClick={onSubmit}>
        Reservar
      </Button>
    </Form>
  );
}
