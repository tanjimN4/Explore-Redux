import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};
const counterSlice =createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state,actions) => {
        state.count+= actions.payload;
        },
        decrement: (state) => {
        state.count -= 1;
        }
    },
})

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;