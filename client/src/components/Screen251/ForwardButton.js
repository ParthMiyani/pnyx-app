import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const StyledIconButton = styled(IconButton)({
  backgroundColor: `rgba(20,20,22, 0.20)`,
  borderRadius: "50%",
  padding: "20px",
});

const ForwardButton = () => {
  return (
    <Link to={"/generating-playlist"}>
      <StyledIconButton color="inherit">
        <ArrowForwardIcon style={{ color: "white" }} />
      </StyledIconButton>
    </Link>
  );
};

export default ForwardButton;
