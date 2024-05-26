import React, { useState, useRef, useEffect } from "react";
import "../../styles/buySongPlayerPage.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import tempImage from "../../assets/tempImage.webp";
import { Link } from "react-router-dom";
import { useUserData } from "../../context/UserDataContext";
import { useCurrentSong } from "../../context/CurrentSongProvider";
import PlayerControls from "../ui/PlayerControls";
import { useDisconnect } from "@thirdweb-dev/react";
import { IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

export default function PurchasedSongPlayerPage() {
  const { userData } = useUserData();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [selectedSongLoaded, setSelectedSongLoaded] = useState(false);
  const { currentSong } = useCurrentSong();
  const disconnect = useDisconnect();

  useEffect(() => {
    if (currentSong) {
      audioRef.current = new Audio(currentSong.link);
      setSelectedSongLoaded(true);
    }
  }, [currentSong]);

  const togglePlayPause = () => {
    setIsPlaying((prevValue) => {
      if (!prevValue) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      return !prevValue;
    });
  };

  return (
    <div className="container249">
      <div className="player249">
        <div className="content249">
          <div className="oval249">
            <VisibilityOutlinedIcon className="icon249" />
            <div className="page-indicator249">
              {userData && userData.views_left}/5
            </div>
          </div>
          <p className="title249">Discover</p>
          <div className="right-oval">
            <Link to={"/"}>
              <IconButton aria-label="logout" onClick={disconnect}>
                <LogoutIcon className="icon" />
              </IconButton>
            </Link>
          </div>
        </div>
        <div className="artist-image-container249">
          <div className="artist-image249">
            <img src={tempImage} alt="Temporary Song Art" />
          </div>
          <h3>{currentSong && currentSong.title}</h3>
        </div>
        {selectedSongLoaded && (
          <PlayerControls
            isPlaying={isPlaying}
            togglePlayPause={togglePlayPause}
            currentSong={currentSong}
            isArtistHidden={false}
          />
        )}
        <BuyOptionButton />
      </div>
    </div>
  );
}

function BuyOptionButton() {
  return (
    <Link to={"/purchased-song"} className="buy-button-container249">
      <div className="buy-button249">
        <button>Purchased</button>
      </div>
    </Link>
  );
}
