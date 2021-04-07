import React, { useState } from 'react';
import { Card, IconButton, makeStyles, TextField, Typography } from "@material-ui/core";
import { format } from "../util";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.extra.base,
    padding: theme.spacing(2),
    color: theme.palette.primary.fontColor,
  },
  img: {
    maxWidth: '100%',
    objectFit: 'contain',
    height: 136,
    marginLeft: "auto",
    marginRight: "auto",
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: 120,
    height: theme.spacing(6),
    color: theme.palette.primary.fontColor,
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    backgroundColor: theme.palette.extra.main,
  },
  buyIcon: {
    backgroundColor: theme.palette.success.light,
    '&:hover': {
      backgroundColor: theme.palette.success.dark,
    }
  },
  sellIcon: {
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    }
  },
}));

const Box = ({ entry, setTotal }) => {
  const { img, label, price } = entry;
  const [amount, setAmount] = useState(0);

  const classes = useStyles();

  const handleChange = (newAmount) => {
    if (newAmount >= 0) {
      setAmount(newAmount);
      setTotal(-(newAmount * price - amount * price));
    }
  }

  return (
    <Card className={classes.root} variant="elevation">
      <img alt={label} className={classes.img} src={img} />
      <Typography variant={"body1"}>{label}</Typography>
      <Typography variant={"body2"}>{format(price)}</Typography>

      <div className={classes.bottom}>
        <IconButton className={classes.sellIcon} onClick={() => handleChange(amount - 1)}>
          <RemoveIcon />
        </IconButton>
        <TextField
          InputProps={{
            className: classes.input
          }}
          type="number"
          variant={'outlined'}
          value={amount}
          onChange={(e) => handleChange(parseInt(e.target.value, 10))}
        />
        <IconButton className={classes.buyIcon} onClick={() => handleChange(amount + 1)}>
          <AddIcon />
        </IconButton>
      </div>
    </Card>
  )
};

export default Box;
