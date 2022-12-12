import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import "./index.css";
import Theme from "./theme/Theme";
import { BrowserRouter as Router } from "react-router-dom";

import server from "./api/server";
const isDevMode = import.meta.env.DEV;
if (isDevMode) {
  server();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Theme>
        <Provider store={store}>
          <App />
        </Provider>
      </Theme>
    </Router>
  </React.StrictMode>
);
