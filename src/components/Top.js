import React from 'react';
import ImageAvatar from "./ImageAvatar";
import bezos from "../assets/bezos.jpg";
import { makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  text: {
    paddingTop: theme.spacing(2),
  }
}));

const Top = () => {

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <ImageAvatar alt={'bezos'} img={bezos} />
      <Typography className={classes.text} variant={'h4'}>Spend Jeff Bezos' Money</Typography>
    </Paper>
  )
}

export default Top;
