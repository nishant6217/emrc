import React, { useEffect } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles({
  component: {
    width: "130%",
    background: "#fff",
    marginLeft: 15,
  },
  header: {
    padding: "16px 24px",
    borderBottom: "1px solid #f0f0f0",
  },
  container: {
    padding: "15px 24px",
    "& > * ": {
      marginTop: 20,
      fontSize: 14,
    },
  },
  price: {
    float: "right",
  },
});

function TotalView({ cartItems }) {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  useEffect(() => {
    totalAmount();
  }, [cartItems]);
  const totalAmount = () => {
    let price = 0,
      discount = 0;
    cartItems.map((item) => {
      price += item.price.mrp;
      discount += item.price.mrp - item.price.cost;
    });
    setPrice(price);
    setDiscount(discount);
  };
  const classes = useStyles();
  return (
    <Box className={classes.component}>
      <Box className={classes.header}>
        <Typography style={{ color: "#878787", fontWeight: 600 }}>
          Price Details{" "}
        </Typography>
      </Box>
      <Box className={classes.container}>
        <Typography>
          Price({cartItems.length} item)
          <span className={classes.price}>₹{price}</span>
        </Typography>
        <Typography>
          Discount <span className={classes.price}>-₹{discount}</span>
        </Typography>
        <Typography>
          Delivery Charges <span className={classes.price}>₹40</span>
        </Typography>
        <Typography style={{ fontWeight: "600"  , fontSize : 18 , borderTop : '1px dashed #e0e0e0' ,padding: '20px 0'}}>
          Total Amount <span className={classes.price}>₹{price-discount}</span>
        </Typography>
        <Typography style={{color :'green'}}>You Will Save <span className={classes.price}>₹{discount - 40}</span></Typography>
      </Box>
    </Box>
  );
}

export default TotalView;
