export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_RESERVATION":
      return { ...state, user_reservations: [...state.user_reservations, action.payload] };
    case "REMOVE_RESERVATION":
      return {
        ...state,
        user_reservations: action.payload,
      };
    default:
      return state;
  }
}
