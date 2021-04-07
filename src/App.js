import React, { useCallback, useState } from 'react';
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import Top from "./components/Top";
import { format } from "./util";
import Box from "./components/Box";
import getImage, { ImageTypes } from "./assets/assetsLoader";
import bezos from "./assets/celebrities/bezos.jpg";
import elon from "./assets/celebrities/elon.jpg";
import lebron from "./assets/celebrities/lebron.jpg";
import bieber from "./assets/celebrities/bieber.jpg";
import margot from "./assets/celebrities/margot.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#fafafa',
  },
  container: {
    maxWidth: 1000,
    marginRight: 'auto',
    marginLeft: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: '#fff',
  },
  bs: {
    backgroundColor: '#78909C',
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(4),
    color: 'white'
  },
}));

const data = [
  { id: 0, img: getImage(ImageTypes.MILK), label: 'Milk', price: 1 },
  { id: 1, img: getImage(ImageTypes.RICE), label: 'Rice', price: 4 },
  { id: 2, img: getImage(ImageTypes.WINE), label: 'Wine', price: 12 },
  { id: 3, img: getImage(ImageTypes.FITNESS), label: 'Fitness Club, monthly fee', price: 37 },
  { id: 4, img: getImage(ImageTypes.NIKE), label: '1 Pair of Nike Running Shoes', price: 75 },
  { id: 5, img: getImage(ImageTypes.PS4), label: 'Gaming Console', price: 299 },
  { id: 6, img: getImage(ImageTypes.LAPTOP), label: 'Laptop - gaming', price: 748.00 },
  { id: 7, img: getImage(ImageTypes.RENT), label: 'Monthly rent for 85 m2 (900 sqft)', price: 1600 },
]

const celebData = [
  {id: 0, name: 'Jeff Bezos', netWorth: 188500000000, img: bezos},
  {id: 1, name: 'Elon Musk', netWorth: 180000000000, img: elon},
  {id: 2, name: 'Lebron James', netWorth: 500000000, img: lebron},
  {id: 3, name: 'Justin Bieber', netWorth: 285000000, img: bieber},
  {id: 4, name: 'Margot Robbie', netWorth: 22000000, img: margot},
];

const App = () => {
  const classes = useStyles();
  const [curCeleb, setCurCeleb] = useState(0);
  const [total, setTotal] = useState(celebData[curCeleb].netWorth);

  const setNewTotal = useCallback((amount) => {
    setTotal(total + amount);
  }, [total]);

  const setNewCeleb = useCallback((id) => {
    const totalSpent = celebData[curCeleb].netWorth - total;
    setTotal(celebData[id].netWorth - totalSpent);
    setCurCeleb(id);
  }, [curCeleb, total])

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant={'h4'}>Spend Famous People's Money</Typography>
      </div>
      <div className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Top data={celebData} current={curCeleb} setCurCeleb={setNewCeleb}/>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={4}>
              <div className={classes.bs}>
                <Typography variant={'h5'}>{format(total)}</Typography>
              </div>
            </Paper>
          </Grid>
          {data.map((entry) => <Grid key={entry.id} item xs={12} sm={6} md={4}>
              <Box entry={entry} setTotal={setNewTotal} />
            </Grid>)}
        </Grid>
      </div>
    </div>
  )
}

export default App;
