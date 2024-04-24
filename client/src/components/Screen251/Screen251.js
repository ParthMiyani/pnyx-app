import React, { useState } from "react";
import "../../styles/Screen251.css";
import BackButton from "./BackButton";
import ForwardButton from "./ForwardButton";
import Searchbar from "./Searchbar";

function Screen251() {
  const [selectedArtist, setSelectedArtist] = useState(null);

  return (
    <div className="screen-container">
      <div className="header">
        <BackButton />
        <p>Choose some songs</p>
        <ForwardButton selectedArtist={selectedArtist} />
      </div>
      <div className="subheader">
        <p>
          Select a minimum of 1 song, so we can generate a playlist for you.
        </p>
      </div>
      <div className="searchbar">
        <Searchbar setSelectedArtist={setSelectedArtist} />
      </div>
    </div>
  );
}
export default Screen251;
