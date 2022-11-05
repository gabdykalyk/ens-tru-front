import { createSlice } from "@reduxjs/toolkit";

const autorizationSlice = createSlice({
    name: 'autorize',
    initialState: {
        token: ''
    },
    reducers: {
        autorization: (state, action) => {
           state.token = action
        }
    },
})

export const { autorization } = autorizationSlice.actions;

export default autorizationSlice.reducer;