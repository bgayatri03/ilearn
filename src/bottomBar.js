import React from "react";
import "./Styles/bottomBar.css";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BottomBar = (props) => {
  return (
    <div className="bottomBar">
      <div className="backButtonClass">
        <Button onClick={props.updateShowCategories}>
          <ArrowBackIcon sx={{ color: "black" }} fontSize="large" />
        </Button>
      </div>
    </div>
  );
};

export default BottomBar;
