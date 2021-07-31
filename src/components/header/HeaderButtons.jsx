import React from "react";
import { useState, useContext } from "react";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  Box,
  withStyles,
  Button,
} from "@material-ui/core";
import Login from "../login/Login";
import { LoginContext } from "../../context/ContextProvider";
import Profile from "./Profile";

const useStyle = makeStyles({
  login: {
    background: "#FFFFFF",
    color: "#2874f0",
    textTransform: "none",
    fontWeight: 600,
    borderRadius: 2,
    padding: "5px 40px",
    boxShadow: "null",
  },
  wrapper: {
    margin: "0 7% 0 auto",
    display: "flex",
    " & > * ": {
      marginRight: 50,
      textDecoration: "none",
      color: "#fff",
    },
  },
});

function HeaderButtons(props) {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(LoginContext);

  const openloginDialog = () => {
    setOpen(true);
  };

  return (
    <Box className={classes.wrapper}>
      {account ? (
        <Profile account={account} setAccount ={setAccount} />
      ) : (
        <Link>
          <Button
            variant="contained"
            className={classes.login}
            onClick={() => openloginDialog()}
          >
            Login
          </Button>
        </Link>
      )}
      <Link>
        <Typography>More</Typography>
      </Link>
      <Link to="/cart">
        <Typography>Cart</Typography>
      </Link>
      <Login open={open} setOpen={setOpen} setAccount={setAccount} />
    </Box>
  );
}

export default HeaderButtons;
