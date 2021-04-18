import React from 'react';
import { Divider, IconButton, makeStyles, TextField, Typography } from "@material-ui/core";
import { formatByCurrency } from "../../../util";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    margin: 0,
  },
  content: {
    display: "flex",
    flexDirection: 'column',
  },
  img: {
    width: 70,
    height: 70,
    padding: theme.spacing(1),
  },
  text: {
    fontWeight: 'bold',
  },
  input: {
    width: theme.spacing(9),
    height: 32,
    color: theme.palette.primary.fontColor,
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    backgroundColor: theme.palette.extra.main,
  },
  buyIcon: {
    height: 32,
    width: 32,
    backgroundColor: theme.palette.success.light,
    '&:hover': {
      backgroundColor: theme.palette.success.dark,
    }
  },
  sellIcon: {
    height: 32,
    width: 32,
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    }
  },
  info: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
    width: '100%',
  },
  divider: {
    backgroundColor: theme.palette.primary.fontColor,
    opacity: 0.4
  }
}));

const SmallProductBox = ({ itemCount, product, updateShoppingCart }) => {
  const { img, label, price } = product;

  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.img}>
          <img style={{width: '100%', height: '100%', objectFit: 'contain'}} src={img} alt={label} />
        </div>
        <div className={classes.info}>
          <div className={classes.content}>
            <Typography className={classes.text} variant={"subtitle1"}>{label}</Typography>
            <Typography variant={"caption"}>{formatByCurrency(price)}</Typography>
          </div>
          <div>
            <IconButton className={classes.sellIcon} onClick={() => updateShoppingCart(itemCount - 1)}>
              <RemoveIcon />
            </IconButton>
            <TextField
              InputProps={{
                className: classes.input
              }}
              type="number"
              variant={'outlined'}
              value={itemCount}
              onChange={(e) => updateShoppingCart(e.target.valueAsNumber)}
            />
            <IconButton className={classes.buyIcon} onClick={() => updateShoppingCart(itemCount + 1)}>
              <AddIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <Divider className={classes.divider} />
    </>
  );
};

export default SmallProductBox;
