import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./global.styled";
import "./index.css";
import Theme from "./theme/Theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <App />
    </Theme>
  </React.StrictMode>
);
