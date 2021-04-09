import React  from 'react';
import LandingPage from "../LandingPage";
import { MuiThemeProvider, responsiveFontSizes } from "@material-ui/core";
import { createTheme } from "../theme/theme";
import useDarkMode from "../features/darkMode/useDarkMode";

const App = () => {
  const { onToggleDarkMode, darkModeEnabled } = useDarkMode();
  let theme = createTheme(darkModeEnabled);
  theme = responsiveFontSizes(theme);

  return <MuiThemeProvider theme={theme}>
    <LandingPage darkMode={{ onToggleDarkMode, darkModeEnabled }} />
  </MuiThemeProvider>
}

export default App;
