import { combineReducers } from "redux";
import { baiTapMovieBookingReducer } from "./slice";

export const rootReducer = combineReducers ({
    baiTapMovie: baiTapMovieBookingReducer
}) 