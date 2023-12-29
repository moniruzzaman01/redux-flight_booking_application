import { ADD, DELETE } from "./actionTypes";

const initialState = [];

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, { id: state.length, ...action.payload.data }];
    case DELETE:
      console.log("delete");
      return [...state];
    default:
      return [...state];
  }
};

export default bookingReducer;
