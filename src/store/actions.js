export const addReservation = (form, data, dispatch) => {
  data.forEach((car) => {
    if (car.id.toString() === form.car_model) {
      const newReservation = {
        ...form,
        car_model: car.model,
        car_company: car.company,
        total: car.rent_price + car.insurances,
      };
      return dispatch({
        type: "ADD_RESERVATION",
        payload: newReservation,
      });
    }
  });
};

export const removeReservation = (state, index, dispatch) => {
  const filterList = state.user_reservations.filter((value, i) => i !== index);
  return dispatch({
    type: "REMOVE_RESERVATION",
    payload: filterList,
  });
};
