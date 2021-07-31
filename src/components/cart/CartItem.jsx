import { Box, Card, makeStyles, Typography, Button } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import GroupButtons from "./GroupButtons";

const useStyle = makeStyles({
  component: {
    display: "flex",
    borderRadius: 0,
  },
  leftComponent: {
    margin: 20,
    display : 'flex',
    flexDirection:'column'
  },
  rightComponent: {
    margin: 20,
  },
  smallText: {
    fontSize: 14,
  },
  price: {
    fontSize: 18,
    fontWeight: 600,
  },
  image: {
    height: 110,
    width: 110,
    borderTop: "1px solid #f0f0f0",
  },
  removeButton: {
    marginTop: 20,
    fontSize: 16,
  },
});

function CartItem({ item, removeItemFromCart  }) {
  const classes = useStyle();
  return (
    <Card className={classes.component}>
      <Box className={classes.leftComponent}>
        <img src={item.url} className={classes.image} />
        <GroupButtons/>
      </Box>
      <Box className={classes.rightComponent}>
        <Typography>{item.title.longTitle}</Typography>
        <Typography
          style={{ marginTop: 10, color: "#878787" }}
          className={classes.smallText}
        >
          Seller : SuperComnet
        </Typography>
        <Typography style={{ margin: " 20px 0" }}>
          <span className={classes.price}>₹{item.price.cost}</span> &nbsp;
          &nbsp; &nbsp;
          <span style={{ color: "#878787" }}>
            <strike>₹{item.price.mrp}</strike>
          </span>{" "}
          &nbsp; &nbsp; &nbsp;
          <span style={{ color: "#388E3C" }}>{item.price.discount} off</span>
        </Typography>
        <Button
          onClick={() => removeItemFromCart(item.id)}
          className={classes.removeButton}
        >
          Remove
        </Button>
      </Box>
    </Card>
  );
}

export default CartItem;
