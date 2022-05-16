import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		session: {
			id: 1,
			name: "Nika",
			email: "nika.shamanauri@gmail.com",
			email_verified_at: null,
			created_at: "2022-04-13T10:02:53.000000Z",
			updated_at: "2022-04-13T11:40:36.000000Z",
			token: "10|JMUO0l8aZu88idZViIW5JI9HVoTNmuS8YaEh9R2X"
		},
		fetched: false,
		isLoggedIn: true
	},
	reducers: {
		// change: (state, action) => {
		//     console.log(state);
		//     state.name = action.payload;
		// },
	}
});

// export const { change } = userSlice.actions;

export default userSlice.reducer;
