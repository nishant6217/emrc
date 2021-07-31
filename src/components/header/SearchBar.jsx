import React from "react";
import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  Box,
  fade,
  InputBase,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
const useStyle = makeStyles((theme) => ({
  search: {
    borderRadius: 2,
    backgroundColor: "#fff",

    marginLeft: 10,
    width: "38%",
    display: "flex",
  },
  searchIcon: {
    padding: 5,
    height: "100%",

    display: "flex",

    color: "blue",
  },
  inputRoot: {
    width: "100%",
    fontSize: "unset",
  },
  inputInput: {
    paddingLeft: 10,
    // vertical padding + font size from searchIcon
  },
}));

function SearchBar() {
  const classes = useStyle();
  return (
    <div className={classes.search}>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
    </div>
  );
}

export default SearchBar;
