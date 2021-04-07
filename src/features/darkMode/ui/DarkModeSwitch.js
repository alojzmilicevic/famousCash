import { FormControlLabel, makeStyles, Switch } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    marginLeft: 'auto',
  }
});

const DarkModeSwitch = ({ darkMode }) => {
  const { darkModeEnabled, onToggleDarkMode } = darkMode;
  const classes = useStyles();
  return <FormControlLabel
    className={classes.root}
    control={<Switch checked={darkModeEnabled} onChange={onToggleDarkMode} />}
    label="Dark Mode"
  />;
}

export default DarkModeSwitch;
