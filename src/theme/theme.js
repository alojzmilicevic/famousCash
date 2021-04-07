import { createMuiTheme } from '@material-ui/core/styles';
import { grey, yellow, lightBlue, red } from "@material-ui/core/colors";

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
    main: '#292929',
    base: grey[900],
  }
};

const normalTheme = {
  primary: {
    main: yellow[100],
    light: '#fffff7',
    dark: '#cbc693',
    fontColor: '#000000',
  },
  secondary: {
    main: red[100],
    light: '#ffffff',
    dark: '#cb9ca1'
  },
  extra: {
    main: '#f5f5f6',
    base: '#ffffff',
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
