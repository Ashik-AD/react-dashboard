import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import GlobalStyle from "./global.styled";
import "./index.css";
import Theme from "./theme/Theme";
import { BrowserRouter as Router } from "react-router-dom";

// import "./api/server";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Theme>
        <Provider store={store}>
          <GlobalStyle />
          <App />
        </Provider>
      </Theme>
    </Router>
  </React.StrictMode>
);
