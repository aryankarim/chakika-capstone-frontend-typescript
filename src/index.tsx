import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import { ThemeProvider } from "@mui/material";
import { themeOptions } from "./utils/MUITheme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themeOptions}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
