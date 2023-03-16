import React from "react";
import "./Styles/back.css";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Back = (props) => {
  return (
    <div className="backStyle">
      <div className="backButtonClass">
        <Button onClick={props.updateShowCategories}>
          <ArrowBackIcon sx={{ color: "black" }} fontSize="large" />
        </Button>
      </div>
    </div>
  );
};

export default Back;
