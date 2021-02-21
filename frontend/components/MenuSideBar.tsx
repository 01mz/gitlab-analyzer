import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import NavBar from "./NavBar";

const MenuButton = withStyles({
  root: {
    textTransform: 'none',
    fontSize: '16px',
    padding: '20px',
    border: '1px solid white',
    color: 'black',
    width: '80%',
    lineHeight: 0.8,
    backgroundColor: 'white',
    borderRadius: '999px',
    margin: '20px 0',
    '&:hover': {
      backgroundColor: '#8FC6F3',
      borderColor: '#8FC6F3',
    },
    '&:active': {
      backgroundColor: 'primary',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  background: {
     background: theme.palette.primary.main,
  },
  card: {
     background: "white",
  },
  button: {
      margin: theme.spacing(1),
      borderRadius: "999"
  },
}));

// TODO: need to make an API request (backend should have contributors: id, name, etc),
// populate an array of names, sort names alphabetically and display them using mapping

const MenuSideBar = () => {
  const classes = useStyles();

  return (
    <Box
        className={classes.background}
        height="100vh"
        width="16vw"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        >
        <MenuButton variant="contained" color="primary" disableRipple className={classes.margin}>
            Everyone
        </MenuButton>
        <MenuButton variant="contained" color="primary" disableRipple className={classes.margin}>
            Bob
        </MenuButton>
        <MenuButton variant="contained" color="primary" disableRipple className={classes.margin}>
            Phil
        </MenuButton>
        <MenuButton variant="contained" color="primary" disableRipple className={classes.margin}>
            Stacey
        </MenuButton>
    </Box>
  );
};

export default MenuSideBar;
