import React from 'react';
import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { celebrityData } from "../data/data";
import Search from "./Search";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    backgroundColor: theme.palette.extra.base,
    color: theme.palette.primary.fontColor,
  },
  text: {
    paddingTop: theme.spacing(2),
    textAlign: 'center',
  },
  button: {
    fontSize: '.6em',
    width: '100%',
    height: theme.spacing(5),
    backgroundColor: props => props.darkModeEnabled ? theme.palette.secondary.main : "primary",
    "&:hover": {
      backgroundColor: props => props.darkModeEnabled ? theme.palette.secondary.dark : "primary",
    },
    color: "black",
  },
  grid: {
    marginTop: theme.spacing(2),
  },
  icon: {
    color: '#fdfb9c'
  }
}));

const CelebrityPicker = ({ celebrity, setCurCelebrity, darkModeEnabled }) => {
  const classes = useStyles({ darkModeEnabled });

  return (
    <Grid item xs={12}>
      <Paper className={classes.root}>
        <Typography className={classes.text} variant={'h4'}>Spend {celebrity.name} Money</Typography>
        <Search setCurCelebrity={setCurCelebrity}/>
        <Grid className={classes.grid} container spacing={2} justify={'center'}>
          {celebrityData.map(celeb => (
            <Grid key={celeb.name} item xs={10} sm={2}>
              <Button
                className={classes.button}
                variant={"text"}
                onClick={() => setCurCelebrity(celeb)}
                color={"primary"}
              >
                {celeb.name}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Grid>
  )
}

export default CelebrityPicker;
