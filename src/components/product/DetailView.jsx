import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProductDetails } from "../../redux/actions/productAction";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { LocalOffer as Badge } from "@material-ui/icons";
import ActionItem from "./ActionItem";

const useStyles = makeStyles({
  component: {
    marginTop: 55,
    background: "#F2F2F2",
  },
  container: {
    margin: "0 80Px",
    background: "#FFF",
    display: "flex",
  },
  rightContainer: {
    marginTop: 50,
    "& >*": {
      marginTop: 10,
    },
  },
  smalltext: {
    fontSize: 14,
  },
  greyTextColor: {
    color: "#878787",
  },
  price: {
    fontSize: 28,
  },
  offer: {
    fontSize: 14,
    marginTop: 10,
  },
  badge: {
    fontSize: 14,
    marginRight: 10,
    color: " #00CC00"
  },
});
const DetailView = ({ match }) => {
  const { product } = useSelector((state) => state.getProductDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [dispatch]);
  const classes = useStyles();

  return (
    <Box className={classes.component}>
      {product && Object.keys(product).length && (
        <Box className={classes.container}>
          <Box style={{ minWidth: "40%" }}><ActionItem product={product}/></Box>
          <Box className={classes.rightContainer}>
            <Typography>{product.title.longTitle}</Typography>
            <Typography
              style={{ color: "#878787" }}
              className={classes.smalltext}
            >
              8 Ratings & 1 Review
              <span>
                <img
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
                  style={{ width: 77, marginLeft: 20 }}
                />
              </span>
            </Typography>
            <Typography>
              <span className={classes.price}>{product.price.cost}</span>{" "}
              &nbsp;&nbsp;&nbsp;
              <span className={classes.greyTextColor}>
                <strike>{product.price.mrp}</strike>
              </span>
              &nbsp;&nbsp;&nbsp;
              <span style={{ color: "#388E3C" }}>
                {product.price.discount} off
              </span>
            </Typography>
            <Typography style={{marginTop :20 ,fontWeight : 600 }}> Available offers</Typography>
            <Box>
              <Typography className={classes.offer}>
                <Badge className={classes.badge} />
                Special PriceGet extra ₹100 off (price inclusive of discount)
              </Typography>
              <Typography className={classes.offer}>
                <Badge className={classes.badge} />
                Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit
                Card
              </Typography>
              <Typography className={classes.offer}>
                <Badge className={classes.badge} />
                Bank Offer20% off on 1st txn with Amex Network Cards issued by
                ICICI
              </Typography>
              <Typography className={classes.offer}>
                <Badge className={classes.badge} />
                Bank,IndusInd Bank,SBI Cards and Mobikwik Bank Offer10% Off on
              </Typography>
              <Typography className={classes.offer}>
                <Badge className={classes.badge} />
                Bank of Baroda Mastercard debit card first time transaction,
                Terms
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};
export default DetailView;
