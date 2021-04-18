import React from 'react';
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
  },
  text: {
    fontStyle: 'italic',
    fontSize: '.8em',
  }
}));

const Footer = () => {
  const classes = useStyles();
  return <div className={classes.root}>
    <Typography variant={"body2"}>Inspired by neal.fun by Neal Agarwal and the 3pic.github.io website </Typography>
    <Typography className={classes.text} variant={"body2"}>© 2021 aloma.  All rights reserved.  </Typography>
  </div>
}

export default Footer;
