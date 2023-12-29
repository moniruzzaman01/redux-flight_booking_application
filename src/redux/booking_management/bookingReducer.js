import { ADD, DELETE } from "./actionTypes";

const initialState = [];

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      if (state.length >= 3) {
        return [...state];
      } else {
        return [...state, { id: state.length, ...action.payload.data }];
      }
    case DELETE: {
      const newState = state.filter((x) => x.id != action.payload.data.id);
      return [...newState];
    }
    default:
      return [...state];
  }
};

export default bookingReducer;
