import React from 'react';
import ImageAvatar from "./ImageAvatar";
import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';

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
  },
  button: {
    fontSize: '.6em',
    width: '100%',
  },
  grid: {
    marginTop: theme.spacing(2),
  },
}));

const Top = ({ data, current, setCurCeleb }) => {
  const classes = useStyles();

  const curCeleb = data[current];
  return (
    <Paper className={classes.root}>
      <ImageAvatar alt={curCeleb.name} img={curCeleb.img} />
      <Typography className={classes.text} variant={'h4'}>Spend {curCeleb.name} Money</Typography>
      <Grid className={classes.grid} container spacing={2} justify={'center'}>
        {data.map(celeb => (
          <Grid item xs={12} md={2}>
            <Button
              className={classes.button}
              startIcon={<StarIcon />}
              variant={"contained"}
              color={"primary"}
              onClick={() => setCurCeleb(celeb.id)}
            >
              {celeb.name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}

export default Top;
