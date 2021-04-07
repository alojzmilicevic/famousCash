import React, { useCallback, useState } from 'react';
import LandingPage from "../LandingPage";
import { MuiThemeProvider } from "@material-ui/core";
import { createTheme } from "../theme/theme";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme(darkMode);

  const toggleDarkMode = useCallback(() => {
    setDarkMode(!darkMode);
  }, [darkMode]);

  return <MuiThemeProvider theme={theme}>
    <LandingPage toggleDarkMode={toggleDarkMode}/>
  </MuiThemeProvider>
}

export default App;
