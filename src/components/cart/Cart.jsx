import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, makeStyles, Typography, Button } from "@material-ui/core";
import CartItem from "./CartItem";
import { removeFromCart } from "../../redux/actions/cartActions";
import EmptyFile from "./EmptyFile";
import TotalView from "./TotalView";

const useStyles = makeStyles({
  component: {
    marginTop: 55,
    padding: "30px  135px",
    display: "flex",
  },
  leftComponent: {
    width: "67%",
    
  },
  rightComponent: {},
  header: {
    padding: "15px 24px ",
    background: "#fff",
  },
  placeOrder: {
    background: "#fb641b",
    color: "#fff",
    borderRadius: 2,
    width: 250,
    height: 50,
    display: "flex",
    marginLeft: "auto",
  },
  bottom: {
    padding: "16px 22px ",
    background: "#fff",
    borderTop: "1px solid #f0f0f0",
  },
});

function Cart(props , counter) {
  const classes = useStyles();
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(cartItems);
  });
  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      {cartItems.length ? (
        <Box className={classes.component}>
          <Box className={classes.leftComponent}>
            <Box className={classes.header}>
              <Typography style={{ fontWeight: "600", fontSize: 18 }}>
                My Cart({cartItems.length})
              </Typography>
            </Box>
            {cartItems.map((item) => (
              <p>
                <CartItem item={item} removeItemFromCart={removeItemFromCart} />
              </p>
            ))}
            <Box className={classes.bottom}>
              <Button className={classes.placeOrder} variant="contained">
                Place Order
              </Button>
            </Box>
          </Box>

          <Box className={classes.rightComponent}>
            <TotalView cartItems={cartItems} />
          </Box>
        </Box>
      ) : (
        <EmptyFile />
      )}
    </>
  );
}

export default Cart;
