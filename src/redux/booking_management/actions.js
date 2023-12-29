import { ADD, DELETE } from "./actionTypes";

export const addBooking = (data) => {
  return {
    type: ADD,
    payload: {
      data,
    },
  };
};
export const deleteBooking = (data) => {
  return {
    type: DELETE,
    payload: {
      data,
    },
  };
};
