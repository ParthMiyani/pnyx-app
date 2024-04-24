import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const StyledIconButton = styled(IconButton)({
  backgroundColor: `rgba(20,20,22, 0.2)`,
  borderRadius: "50%",
  padding: "20px",
});

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <StyledIconButton onClick={() => navigate(-1)} color="inherit">
      <ArrowBackIcon />
    </StyledIconButton>
  );
};

export default BackButton;
