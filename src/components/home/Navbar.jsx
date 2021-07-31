import React from "react";
import { navData } from "../constants/data";
import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  Box,
  fade,
  InputBase,
} from "@material-ui/core";

const useStyle = makeStyles({
  component: {
    display: "flex",
    margin: "55px 130px 0 130px",
    justifyContent: "space-between",
  },
  container: {
    textAlign: "center",
    padding: "12px 8px",
  },
  image: {
    width: 64,
  },
  text: {
    fontWeight: 600,
  },
});

function Navbar(props) {
  const classes = useStyle();
  return (
    <Box className={classes.component}>
      {navData.map((data) => (
        <Box className={classes.container}>
          <img src={data.url} className={classes.image} />
          <Typography className={classes.text}>{data.text}</Typography>
        </Box>
      ))}
    </Box>
  );
}

export default Navbar;
