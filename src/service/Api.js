const axios = require("axios").default;
const url = "https://ecmrcbed.herokuapp.com";
console.log("111111111111111111", url);

export const authenticateSignup = async (user) => {
  try {
    console.log("@@@@@ inside try");
    return await axios
      .post(`${url}/signup`, user)
      .then((res) => console.log(res, "rrrrrrrrrrrrrrrrr"))
      .catch((err) =>
        console.log(err.response.data.message, "errrrrrrrrrrrrrrrr")
      );
  } catch (error) {
    console.log("error", error.message);
  }
};

export const authenticateLogin = async (user) => {
  try {
    return await axios.post(`${url}/login`, user)
  } catch (error) {
    console.log(error, "error while logging in");
  }
};
