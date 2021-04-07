import { FormControlLabel, makeStyles, Switch } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    marginLeft: 'auto',
  }
});

const DarkModeSwitch = ({ onToggleDarkMode }) => {
  const classes = useStyles();
  return <FormControlLabel
    className={classes.root}
    control={<Switch onChange={onToggleDarkMode} />}
    label="Dark Mode"
  />;
}

export default DarkModeSwitch;
