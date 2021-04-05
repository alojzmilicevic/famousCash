import { Grid, makeStyles } from "@material-ui/core";
import Top from "./components/Top";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#fafafa',
  },
  container: {
    maxWidth: 1000,
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
  },
  bs: {
    backgroundColor: 'green',
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(4)
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>Spend famous peoples money</div>
      <div className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Top />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className={classes.bs}>$100,000,000,000</div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className={classes.bs}>$100,000,000,000</div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className={classes.bs}>$100,000,000,000</div>
          </Grid>

        </Grid>
      </div>
    </div>
  )
}

export default App;
