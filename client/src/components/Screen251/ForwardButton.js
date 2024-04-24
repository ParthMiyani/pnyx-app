import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { useData } from "../context/SonglistContext";

const StyledIconButton = styled(IconButton)({
  backgroundColor: `rgba(20,20,22, 0.20)`,
  borderRadius: "50%",
  padding: "20px",
});

const ForwardButton = ({ selectedArtist }) => {
  const { updateResponseData } = useData();

  const handleClick = () => {
    // Send POST request to http://127.0.0.1:5000/recommend with the selected artist
    if (!selectedArtist) {
      console.log("No artist selected. Cannot proceed.");
      return;
    }
    console.log("Selected Artist:", selectedArtist);
    fetch("http://127.0.0.1:5000/recommend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        song_names: [selectedArtist], // Populate selected artist in the payload
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        updateResponseData(data); // Update the response data in the context
        // Handle response data if needed
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Link to={selectedArtist ? "/loading" : "#"} onClick={handleClick}>
      <StyledIconButton color="inherit">
        <ArrowForwardIcon style={{ color: "white" }} />
      </StyledIconButton>
    </Link>
  );
};

export default ForwardButton;
