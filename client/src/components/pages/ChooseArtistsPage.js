import React, { useState } from "react";
import "../../styles/chooseArtistsPage.css";
import BackButton from "../ui/BackButton";
import ForwardButton from "../ui/ForwardButton";
import Searchbar from "../ui/Searchbar";

export default function ChooseArtistsPage() {
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
