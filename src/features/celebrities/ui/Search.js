import React, { useState } from 'react';
import {
  CircularProgress,
  Dialog,
  DialogTitle, Divider,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  makeStyles, Typography
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { Form } from 'react-final-form';
import { TextField } from "mui-rff";
import { getCelebrity } from "../../../api/celebrities";

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 360,
    marginTop: theme.spacing(1),
  }
}));

const Search = ({ setCurCelebrity }) => {
  const classes = useStyles();

  const [modalOpen, setModalOpen] = useState(false);
  const [celebrities, setCelebrities] = useState([]);
  const onSubmit = async (formValues) => {
    if (formValues) {
      const data = await getCelebrity(formValues.name);
      setCelebrities(data);
    }
    setModalOpen(true);
  };

  return (
    <>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <TextField
              className={classes.root}
              label="Search for other celebrities..."
              name="name"
              InputProps={{
                endAdornment: <InputAdornment position="end">
                  <IconButton onClick={handleSubmit}>
                    {submitting ? <CircularProgress size={24} /> : <SearchIcon />}
                  </IconButton>
                </InputAdornment>,
              }}
            />
          </form>
        )}
      />
      <Dialog maxWidth={'sm'} fullWidth onClose={() => setModalOpen(false)} aria-labelledby="simple-dialog-title"
              open={modalOpen}>
        <DialogTitle>Results</DialogTitle>
        <List>
          {celebrities.map((celeb) => (
            <>
              <ListItem onClick={() => {
                setModalOpen(false);
                return setCurCelebrity(celeb);
              }} button>
                <ListItemText primary={celeb.name} />
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </Dialog>
    </>

  )

}

export default Search;
