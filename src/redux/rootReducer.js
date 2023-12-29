import { combineReducers } from "redux";
import bookingReducer from "./booking_management/bookingReducer";

const rootReducer = combineReducers({ booking: bookingReducer });

export default rootReducer;
