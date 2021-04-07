import React  from 'react';
import LandingPage from "../LandingPage";
import { MuiThemeProvider } from "@material-ui/core";
import { createTheme } from "../theme/theme";
import useDarkMode from "../features/darkMode/useDarkMode";

const App = () => {
  const { onToggleDarkMode, darkMode } = useDarkMode();
  const theme = createTheme(darkMode);

  return <MuiThemeProvider theme={theme}>
    <LandingPage onToggleDarkMode={onToggleDarkMode}/>
  </MuiThemeProvider>
}

export default App;
