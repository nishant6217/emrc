import { useState } from "react";
import { Typography, Menu, MenuItem, makeStyles } from "@material-ui/core";
const useStyle = makeStyles({
  component: {
    marginTop: 40,
  },
});

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const logout = () => {
    setAccount("");
  };
  const classes = useStyle();
  return (
    <>
      <Typography onClick={handleClick}>{account}</Typography>
      <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        className={classes.component}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
