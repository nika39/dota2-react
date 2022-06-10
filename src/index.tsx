// import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import axios from "axios";
import App from "./App";

import "./index.css";

axios.defaults.baseURL = `${process.env.REACT_APP_URL}/`;
axios.defaults.withCredentials = true;

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
    // <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    // </React.StrictMode>
);
