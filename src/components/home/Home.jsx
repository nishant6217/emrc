import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Slide from "./Slide";
import { useEffect } from "react";
import { getProducts as listProducts } from "../../redux/actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  Box,
  fade,
  InputBase,
} from "@material-ui/core";
// import { products } from "../constants/data";

const useStyle = makeStyles({
  component: {
    padding: 10,
    background: "#f2f2f2",
  },
  rightWrapper: {
    background: "#FFFFFF",
    padding: 5,
    margin: "12px 0 0 10px",
    width: "17%",
  },
});

function Home(props) {
  const classes = useStyle();
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Box className={classes.component}>
        <Banner />
        <Box style={{ display: "flex" }}>
          <Box style={{ width: "83%" }}>
            <Slide timer={true} title="Deals of the day" products={products} />
          </Box>
          <Box className={classes.rightWrapper}>
            <img
              src="https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70"
              style={{ width: 216, height: 379 }}
            />
          </Box>
        </Box>
        <Slide timer={false} title="Discount for you" products={products} />
        <Slide timer={false} title="Suggested Items" products={products} />
        <Slide timer={false} title="Best Sellers" products={products} />
        <Slide timer={false} title="Top Selection" products={products} />
        <Slide timer={false} title="Recommended Items" products={products} />
      </Box>
    </div>
  );
}

export default Home;
