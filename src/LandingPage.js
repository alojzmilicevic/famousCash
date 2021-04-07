import React from 'react';
import { Grid, makeStyles } from "@material-ui/core";
import Header from "./components/Header";
import CelebrityPicker from "./features/celebrities/ui/CelebrityPicker";
import useCelebrityData from "./features/celebrities/useCelebrityData";
import NetWorthDisplay from "./components/NetWorthDisplay";
import Products from "./features/products/ui/Products";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.extra.main,
    color: theme.palette.primary.fontColor,
  },
  container: {
    margin: 0,
    paddingBottom: theme.spacing(2),
    maxWidth: 1000,
    marginRight: 'auto',
    marginLeft: 'auto',
  }
}));

const LandingPage = ({ onToggleDarkMode }) => {
  const classes = useStyles();
  const { remainingAmount, setCurRemainingAmount, celebrity, setCurCelebrity } = useCelebrityData();

  return (
    <div className={classes.root}>
      <Header onToggleDarkMode={onToggleDarkMode} />
      <Grid className={classes.container} container spacing={2}>
        <CelebrityPicker celebrity={celebrity} setCurCelebrity={setCurCelebrity} />
        <NetWorthDisplay remainingAmount={remainingAmount} />
        <Products setCurRemainingAmount={setCurRemainingAmount}/>
      </Grid>
    </div>
  )
}

export default LandingPage;
