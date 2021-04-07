import React from 'react';
import LandingPage from "../LandingPage";
import { MuiThemeProvider } from "@material-ui/core";
import { createTheme } from "../theme/theme";
import useDarkMode from "../features/darkMode/useDarkMode";

const App = () => {
  const { onToggleDarkMode, darkModeEnabled } = useDarkMode();
  const theme = createTheme(darkModeEnabled);

  return <MuiThemeProvider theme={theme}>
    <LandingPage darkMode={{ onToggleDarkMode, darkModeEnabled }} />
  </MuiThemeProvider>
}

export default App;
