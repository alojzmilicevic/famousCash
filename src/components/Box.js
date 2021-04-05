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
    backgroundColor: '#fff',
    padding: theme.spacing(2),
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
    padding: theme.spacing(1),
    width: 120,
    textAlign: "center"
  },
  inputRoot: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  buyIcon: {
    backgroundColor: '#defabb',
    '&:hover': {
      backgroundColor: '#f2fde4',
    }
  },
  sellIcon: {
    backgroundColor: '#FFCDD2',

    '&:hover': {
      backgroundColor: '#FFEBEE',
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
          className={classes.inputRoot}
          classes={{
            root: classes.input
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
