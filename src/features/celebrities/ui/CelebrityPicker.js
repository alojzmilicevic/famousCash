import React from 'react';
import ImageAvatar from "../../../components/ImageAvatar";
import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';
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

  const curCeleb = celebrityData[celebrity];
  return (
    <Grid item xs={12}>
      <Paper className={classes.root}>
        <ImageAvatar alt={curCeleb.name} img={curCeleb.img} />
        <Typography className={classes.text} variant={'h4'}>Spend {curCeleb.name} Money</Typography>
        <Grid className={classes.grid} container spacing={2} justify={'center'}>
          {celebrityData.map(celeb => (
            <Grid key={celeb.name} item xs={10} sm={2}>
              <Button
                className={classes.button}
                startIcon={<StarIcon className={classes.icon} />}
                variant={"contained"}
                onClick={() => setCurCelebrity(celeb.id)}
                color={"primary"}
              >
                {celeb.name}
              </Button>
            </Grid>
          ))}
        </Grid>
        <Search />
      </Paper>
    </Grid>
  )
}

export default CelebrityPicker;
