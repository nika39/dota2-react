import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        session: {},
        fetched: false,
        isLoggedIn: false
    },
    reducers: {}
});

// export const { actions } = userSlice.actions;

export default userSlice.reducer;
