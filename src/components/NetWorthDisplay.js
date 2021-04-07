import React from 'react';
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { format } from "../util";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.dark,
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(4),
    color: theme.palette.primary.fontColor,
  },
  grid: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    marginTop: 8,
  },
}));

const NetWorthDisplay = ({ remainingAmount }) => {
  const classes = useStyles();

  return <Grid item xs={12} className={classes.grid} style={{paddingTop: 0}}>
    <Paper elevation={4}>
      <div className={classes.root}>
        <Typography variant={'h5'}>{format(remainingAmount)}</Typography>
      </div>
    </Paper>
  </Grid>
};

export default NetWorthDisplay;
