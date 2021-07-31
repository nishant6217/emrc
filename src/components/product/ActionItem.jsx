import React from "react";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { addToCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  leftContainer: {
    padding: " 40px 0 0 80px",
  },
  image: {
    paddign: "15px 20px",
    border: "1px solid #f0f0f0",
  },
  button: {
    height: 50,
    width: "46%",
  },
  addToCart: {
    background: "#ff9f00",
    marginRight: 10,
  },
});

function ActionItem({ product }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const addItemToCart = () => {
    dispatch(addToCart(product.id));
    history.push("/cart");
  };
  return (
    <Box className={classes.leftContainer}>
      <img src={product.detailUrl} className={classes.image} />
      <Button
        variant="contained"
        className={classes.button}
        style={{ background: "#ff9f00", marginRight: 10 }}
        onClick={() => addItemToCart()}
      >
        <span style={{ fontWeight: 600, color: "#fff", borderRadius: 2 }}>
          Add to Cart
        </span>
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        style={{ background: "#fb641b" }}
      >
        <span style={{ fontWeight: 600, color: "#fff", borderRadius: 2 }}>
          Buy Now
        </span>
      </Button>
    </Box>
  );
}

export default ActionItem;
