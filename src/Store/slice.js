import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    chairBooking: [],
    chairBooked: []
}

const baiTapMovieBookingSlice = createSlice ({
    name: 'baiTapMovieBooking',
    initialState,
    reducers: {
        setChairBooking: (state, action) => {

            const index = state.chairBooking.findIndex(item => item.soGhe === action.payload.soGhe)

            if (index !== -1) {
                state.chairBooking.splice(index, 1)
            } else {
                state.chairBooking.push(action.payload)
            }
        },

        setChairBooked: (state, action) => {
            state.chairBooked = [... state.chairBooked, ... state.chairBooking];
            state.chairBooking = []
        }
    }
})

export const {reducer: baiTapMovieBookingReducer, actions: baiTapMovieBookingAction} = baiTapMovieBookingSlice