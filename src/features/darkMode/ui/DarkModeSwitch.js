import React from "react";
import { IconButton, makeStyles, Tooltip } from "@material-ui/core";
import DarkModeOn from '@material-ui/icons/Brightness4';
import DarkModeOff from '@material-ui/icons/Brightness7';

const useStyles = makeStyles({
  root: {
    marginLeft: 'auto',
  }
});

const DarkModeSwitch = ({ darkMode }) => {
  const { darkModeEnabled, onToggleDarkMode } = darkMode;
  const classes = useStyles();
  return (
    <Tooltip title={'Toggle light/dark theme'}>
      <IconButton onClick={onToggleDarkMode} className={classes.root}>
        {darkModeEnabled ? <DarkModeOff color={"secondary"} /> : <DarkModeOn color={"secondary"} />}
      </IconButton>
    </Tooltip>
  )
}

export default DarkModeSwitch;
