import React from 'react';
import ImageAvatar from "../../../components/ImageAvatar";
import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';
import { celebrityData } from "../data/data";

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
  },
  grid: {
    marginTop: theme.spacing(2),
  },
}));

const CelebrityPicker = ({ celebrity, setCurCelebrity }) => {
  const classes = useStyles();

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
                startIcon={<StarIcon color={'primary'} />}
                variant={"contained"}
                color={"secondary"}
                onClick={() => setCurCelebrity(celeb.id)}
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
