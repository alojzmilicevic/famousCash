import { Avatar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
}));

const ImageAvatar = ({ img, alt }) => {
  const classes = useStyles();
  return <Avatar className={classes.large} alt={alt} src={img} />
}

export default ImageAvatar;
