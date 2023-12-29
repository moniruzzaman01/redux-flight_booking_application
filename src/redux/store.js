import { createStore } from "redux";
import bookingReducer from "./booking_management/bookingReducer";

const store = createStore(bookingReducer);

export default store;
