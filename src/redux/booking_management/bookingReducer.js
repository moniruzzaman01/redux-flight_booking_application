import { ADD, DELETE } from "./actionTypes";

const initialState = [];

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      console.log("add");
      return [...state];
    case DELETE:
      console.log("delete");
      return [...state];
    default:
      return [...state];
  }
};

export default bookingReducer;
