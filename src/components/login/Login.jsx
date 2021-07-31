import React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  makeStyles,
  Box,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { authenticateSignup, authenticateLogin } from "../../service/Api";

const useStyle = makeStyles({
  component: {
    height: "70vh",
    width: "90vh",
  },
  image: {
    backgroundImage: `url(${"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"})`,
    height: "70vh",
    backgroundRepeat: "no-repeat",
    background: "#2874f0",
    width: "40%",
    backgroundPosition: "center 85%",
    padding: "45px 35px",
    "& >*": {
      color: "#FFFFFF",
      fontWeight: 600,
    },
  },
  login: {
    padding: "25px 35px",
    display: "flex",
    flex: "1",
    flexDirection: "column",
    "& > *": {
      marginTop: 20,
    },
  },
  text: {
    color: "#878787",
    fontSize: "12px",
  },
  loginBtn: {
    textTransform: "none",
    background: "#FB641B",
    color: "#FFFFFF",
    height: 48,
    borderRadius: 2,
  },
  requestBtn: {
    textTransform: "none",
    background: "#FFF",
    color: "#2874F0",
    height: 48,
    borderRadius: 2,
    fontWeight: 600,
  },
  createText: {
    textAlign: "center",
    marginTop: "auto",
    fontSize: 14,
    color: "#2874F0",
    fontWeight: 600,
    cursor: "pointer",
  },
});
const initialValue = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your orders and wishlist and recomendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you are new here",
    subHeading: "Signup with your mobile number to get started",
  },
};
const signupInitialValue = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phonenumber: "",
};
const loginInitialValue = {
  username: "",
  password: "",
};

function Login({ open, setOpen, setAccount }) {
  const classes = useStyle();
  const [account, toggleAccount] = useState(initialValue.login);
  const [signup, setSignup] = useState(signupInitialValue);
  const [login, setLogin] = useState(loginInitialValue);
  const handleClose = () => {
    setOpen(false);
    toggleAccount(initialValue.login);
  };

  const toggleUserAccount = () => {
    toggleAccount(initialValue.signup);
  };
  const signupuser = async () => {
    let response = await authenticateSignup(signup);
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! signup", signup);
    // if (!response) {
    //   return;
    // }
    handleClose();
    setAccount(signup.username);
    console.log("#@#@#@#@#@", signup.username);
  };
  const loginUser = async () => {
    let response = await authenticateLogin(login);
    if (!response) {
      return;
    }
    console.log("#@#@#@#@#@", login.username);
    handleClose();
    setAccount(login.username);
  };
  const onInputChnage = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    console.log(signup);
  };
  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
    console.log(login);
  };

  // const toggleAccountClose = () => {
  //   setAccount(initialValue.login);
  // };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent className={classes.component}>
        <Box style={{ display: "flex" }}>
          <Box className={classes.image}>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: "20px" }}>
              {account.subHeading}
            </Typography>
          </Box>
          {account.view === "login" ? (
            <Box className={classes.login}>
              <TextField
                onChange={(e) => onValueChange(e)}
                name="username"
                label="enter your Email/MobileNo"
              />
              <TextField
                onChange={(e) => onValueChange(e)}
                name="password"
                label="enter your password"
              />
              <Typography className={classes.text}>
                By continuing , you agree to Flipkart's term of use and privacy
                policy
              </Typography>
              <Button
                onClick={() => loginUser()}
                variant="contained"
                className={classes.loginBtn}
              >
                Login
              </Button>
              <Typography
                className={classes.text}
                style={{ textAlign: "center" }}
              >
                OR
              </Typography>
              <Button variant="contained" className={classes.requestBtn}>
                Request OTP
              </Button>
              <Typography
                onClick={() => toggleUserAccount()}
                className={classes.createText}
              >
                New to Flipkart ? Create an account
              </Typography>
            </Box>
          ) : (
            <Box className={classes.login}>
              <TextField
                onChange={(e) => onInputChnage(e)}
                name="firstname"
                label="enter your First Name"
              />
              <TextField
                onChange={(e) => onInputChnage(e)}
                name="lastname"
                label="enter your Last Name"
              />

              <TextField
                onChange={(e) => onInputChnage(e)}
                name="username"
                label="enter your username"
              />

              <TextField
                onChange={(e) => onInputChnage(e)}
                name="email"
                label="enter your email"
              />

              <TextField
                onChange={(e) => onInputChnage(e)}
                name="password"
                label="enter your password"
              />

              <TextField
                onChange={(e) => onInputChnage(e)}
                name="phonenumber"
                label="enter your phone-number"
              />

              <Button
                variant="contained"
                className={classes.requestBtn}
                onClick={() => signupuser()}
              >
                Sign-Up
              </Button>
              {/* <Button
                onCLick={toggleAccountClose()}
                className={classes.createText}
              >
                Switch to Login
              </Button> */}
            </Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default Login;
