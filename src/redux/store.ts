import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import heroesReducer from "./slices/heroesSlice";
import ranksReducer from "./slices/ranksSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        heroes: heroesReducer,
        ranks: ranksReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
