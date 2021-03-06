import React from 'react';
import { makeStyles, Paper, Typography } from "@material-ui/core";
import DarkModeSwitch from "../features/darkMode/ui/DarkModeSwitch";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr repeat(1, auto) 1fr',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.fontColor,
    alignItems: 'center',
  },
  accent: {
    height: theme.spacing(2),
    width: '100%',
    backgroundColor: theme.palette.primary.dark,
  },
  text: {
    gridColumnStart: '2',
  },
}));

const Header = ({ darkMode }) => {
  const classes = useStyles();

  return <Paper elevation={2}>
    <div className={classes.accent}/>
    <div className={classes.root}>
      <Typography className={classes.text} variant={'h5'}>Spend Famous People's Money</Typography>
      <DarkModeSwitch darkMode={darkMode} />
    </div>
  </Paper>
}

export default Header;
