import { ThemeOptions } from "@mui/material/styles/experimental_extendTheme";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const themeOptions: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: "#2A6559",
    },
    secondary: {
      main: "#D4EDE8",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themeOptions}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
