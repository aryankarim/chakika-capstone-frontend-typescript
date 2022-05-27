import { createTheme } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material/styles/experimental_extendTheme";

export const themeOptions: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: "#2A6559",
    },
    secondary: {
      main: "#D4EDE8",
    },
    error: {
      main: "#ff7878",
    },
  },
});
