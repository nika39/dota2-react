// import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import axios from "axios";
import { store } from "./redux/store";
import App from "./App";

import "./index.css";

axios.defaults.baseURL = `${process.env.REACT_APP_URL}/api`;
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
    const user = store.getState().user;

    if (user.isLoggedIn && config.headers !== undefined) {
        // console.log(`user is Logged In!`);
        config.headers.Authorization = `Bearer ${user?.session?.token}`;
    }

    return config;
});

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
    // <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    // </React.StrictMode>
);
