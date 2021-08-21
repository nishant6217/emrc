import axios from "axios";
import * as actionTypes from "../constants/cartConstant";
const url = "https://ecmrcbed.herokuapp.com";

export const addToCart = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/products/${id}`);
    let cart = localStorage.getItem("carts");
    if (!cart) cart = [];
    else cart = JSON.parse(cart);

    cart.push(data);

    localStorage.setItem("carts", JSON.stringify(cart));

    console.log(data);

    dispatch({ type: actionTypes.ADD_TO_CART, payload: data });
  } catch (err) {
    console.log("error", err.messgae);
  }
};
export const fetch = (data) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.ADD_TO_CARTS, payload: data });
  } catch (err) {
    console.log(err.messgae, " error");
  }
};

export const removeFromCart = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id });
  } catch (error) {
    console.log(error.messgae, " error");
  }
};
