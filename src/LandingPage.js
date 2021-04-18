import React from 'react';
import { Grid, makeStyles } from "@material-ui/core";
import Header from "./components/Header";
import CelebrityPicker from "./features/celebrities/ui/CelebrityPicker";
import useCelebrityData from "./features/celebrities/useCelebrityData";
import NetWorthDisplay from "./features/celebrities/ui/NetWorthDisplay";
import Products from "./features/products/ui/Products";
import useProductAmount from "./features/products/useProductAmount";
import Footer from "./components/Footer";

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
    width: '100%',
  }
}));

const LandingPage = ({ darkMode }) => {
  const classes = useStyles();
  const {
    remainingAmount,
    resetRemainingAmount,
    setCurRemainingAmount,
    celebrity,
    setCurCelebrity
  } = useCelebrityData();

  const {
    updateShoppingCart,
    shoppingCart,
    resetShoppingCart,
  } = useProductAmount(setCurRemainingAmount, resetRemainingAmount);

  return (
    <div className={classes.root}>
      <Header darkMode={darkMode} />
      <Grid className={classes.container} container spacing={2}>
        <CelebrityPicker
          darkModeEnabled={darkMode.darkModeEnabled}
          celebrity={celebrity}
          setCurCelebrity={setCurCelebrity}
        />
        <NetWorthDisplay
          resetShoppingCart={resetShoppingCart}
          remainingAmount={remainingAmount}
          shoppingCart={shoppingCart}
          celebrity={celebrity}
          updateShoppingCart={updateShoppingCart}
        />
        <Products
          updateShoppingCart={updateShoppingCart}
          shoppingCart={shoppingCart}
        />
      </Grid>
      <Footer />
    </div>
  )
}

export default LandingPage;
