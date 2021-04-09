import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import { makeStyles, Tooltip, Typography } from "@material-ui/core";
import { productData } from "../features/products/data/data";
import SmallProductBox from "../features/products/SmallProductBox";
import DeleteIcon from '@material-ui/icons/Delete';
import { FacebookIcon, FacebookShareButton } from "react-share";
import { serialize } from "../features/products/serializeShoppingBasket";

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 500,
    backgroundColor: theme.palette.extra.light,
    color: theme.palette.primary.fontColor,
  },
  main: {
    display: "flex",
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
  clearButton: {
    backgroundColor: theme.palette.error.light,
    color: 'white',
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
    padding: theme.spacing(2),
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
  }
}));

const Transition = React.forwardRef((props, ref) =>
  <Slide direction="up" ref={ref} {...props} />);

const ShoppingListDialog = ({
                              resetShoppingCart,
                              closeDialog,
                              open,
                              shoppingCart,
                              totalItemsInBasket,
                              price,
                              updateSoppingCart
                            }) => {
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onBackdropClick={closeDialog}
      classes={{ paper: classes.root }}
      keepMounted
    >
      <DialogContent>
        <div className={classes.main}>
          <div className={classes.header}>
            <Typography variant={'body2'}>Your Shopping Basket ({totalItemsInBasket}) items.</Typography>
            <Typography className={classes.text} variant={"subtitle1"}>Total: {price}</Typography>
          </div>
          {shoppingCart.map((count, index) => {
            if (count > 0) {
              const product = productData[index];
              return <SmallProductBox
                itemCount={shoppingCart[product.id]}
                updateShoppingCart={(amount) => updateSoppingCart(amount, product.id, product.price)}
                product={product}
              />
            }
            return null;
          })}
        </div>
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Tooltip title="Clear Shopping Basket" placement="bottom-start">
          <Button
            variant="contained"
            className={classes.clearButton}
            startIcon={<DeleteIcon />}
            onClick={resetShoppingCart}
          >
            Delete
          </Button>
        </Tooltip>
        <FacebookShareButton url={'https://main.d2dns4oupfe5if.amplifyapp.com/'} quote={serialize(shoppingCart)}>
          <FacebookIcon size={32} />
        </FacebookShareButton>
      </DialogActions>
    </Dialog>
  );
};

export default ShoppingListDialog;
