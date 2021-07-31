import axios from "axios";
import * as actionTypes from "../constants/cartConstant";
const url = "https://ecmrcbed.herokuapp.com";

export const addToCart = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/products/${id}`);

    console.log(data);
    dispatch({ type: actionTypes.ADD_TO_CART, payload: data });
  } catch (err) {
    console.log("error", err.messgae);
  }
};

export const removeFromCart = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id });
  } catch (error) {
    console.log(error.messgae, " error");
  }
};
