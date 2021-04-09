import React, { useState } from 'react';
import { Badge, Grid, IconButton, makeStyles, Paper, Typography } from "@material-ui/core";
import { formatByCurrency } from "../../../util";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingListDialog from "../../../components/ShoppingListDialog";
import { celebrityData } from "../data/data";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    display: "grid",
    gridTemplateColumns: '1fr repeat(1, auto) 1fr',
    justifyContent: "center",
    padding: theme.spacing(4),
    color: theme.palette.primary.fontColor,
    alignItems: 'center',
  },
  grid: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    marginTop: 8,
  },
  text: {
    gridColumnStart: 2,
  },
  button: {
    marginLeft: 'auto',
  },
}));

const NetWorthDisplay = ({ remainingAmount, resetShoppingCart, shoppingCart, celebrity, updateShoppingCart }) => {
  const classes = useStyles();

  const totalItemsInBasket = shoppingCart.reduce((a, b) => a + b, 0);
  const price = formatByCurrency(celebrityData[celebrity].netWorth - remainingAmount);

  const [open, setOpen] = useState(false);

  return <Grid item xs={12} className={classes.grid} style={{ paddingTop: 0 }}>
    <Paper elevation={4}>
      <div className={classes.root}>
        <Typography className={classes.text} variant={'h5'}>{formatByCurrency(remainingAmount)}</Typography>
        <IconButton className={classes.button} onClick={() => setOpen(!open)}>
          <Badge max={999} badgeContent={totalItemsInBasket} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <ShoppingListDialog
          updateSoppingCart={updateShoppingCart}
          open={open}
          closeDialog={() => setOpen(false)}
          resetShoppingCart={resetShoppingCart}
          shoppingCart={shoppingCart}
          totalItemsInBasket={totalItemsInBasket}
          price={price}
        />
      </div>
    </Paper>
  </Grid>
};

export default NetWorthDisplay;
