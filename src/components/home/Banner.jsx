import React from "react";
import Carousel from "react-material-ui-carousel";
import { bannerData } from "../constants/data";
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
  image: {
    width: "100%",
    height: 280,
  },
});

function Banner(props) {
  const classes = useStyle();
  return (
    <Carousel
      autoPlay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
    >
      {bannerData.map((image) => (
        <img src={image} className={classes.image} />
      ))}
    </Carousel>
  );
}

export default Banner;
