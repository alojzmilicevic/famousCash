import { createMuiTheme } from '@material-ui/core/styles';
import { grey, yellow, lightBlue, brown } from "@material-ui/core/colors";

const darkTheme = {
  primary: {
    main: '#1e1e1e',
    light: '#1f1f1f',
    dark: '#000000',
    fontColor: '#fff',
  },
  secondary: {
    main: lightBlue[100],
    light: '#e6ffff',
    dark: '#82b3c9'
  },
  extra: {
    main: '#424242',
    base: grey[900],
    light: '#424242',
  }
};

const normalTheme = {
  primary: {
    main: brown[100],
    light: '#fffefa',
    dark: '#a59a96',
    fontColor: '#000000',
  },
  secondary: {
    main: yellow[200],
    light: '#ffffcf',
    dark: '#cbc26d'
  },
  extra: {
    main: '#e1e2e1',
    base: '#ffffff',
    light: '#ffffff',
  }
};

export const createTheme = (darkMode) => createMuiTheme({
  palette: darkMode ? {
      ...darkTheme,
    } :
    {
      ...normalTheme
    },
});
