import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core";

const StyledButton = withStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "65px",
        width: "140px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: 0, 
        //background: "#1302fa",
        background: "linear-gradient(97.2deg, #6304ff 12.48%,#23adf3 103%)",
        color: "#fff",
        transform: "none",
        boxShadow: "6px 6px 0 0 #c7d8ed",
        transition: "background .3s,border-color .3s,color .3s",
        "&:hover": {
            backgroundColor:  "#4f25f7"
          },
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);


function CustomButton(props) {
  return (
     <StyledButton variant="contained">{props.txt}</StyledButton>
  )
}


export default CustomButton