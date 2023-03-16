import React from "react";
import "./Styles/navBar.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const Navbar = () => {
  return (
    <div className="navigationBar">
      <div className="Title">
        <h3 className="navHeadingFont"> iLearn </h3>
      </div>
      <div className="homeLogo">
        <Button component={Link} to="/">
          <HomeIcon sx={{ color: "black" }} fontSize="large" />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
