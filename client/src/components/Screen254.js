import React, { useState, useRef, useEffect } from "react";
import "../styles/Screen249.css";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import tempImage from "./tempImage.webp";
import { Link } from "react-router-dom";
import { useUserID } from "./context/UserIDContext";

function Screen254() {
  const [userData, setUserData] = useState(null); // State to hold user data
  const { userID } = useUserID();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://25-pnyx-3hfydn1fl-vidhip30s-projects.vercel.app/users/${userID}`);
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const userData = await response.json();
        setUserData(userData);
        console.log(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Any cleanup code if needed
    };
  }, [userID]); // Fetch data whenever userID changes

  const togglePlayPause = () => {
    setIsPlaying(prevValue => {
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
            <div className="page-indicator249">{userData && userData.views_left}/5</div>
          </div>
          <p className="title249">Discover</p>
        </div>
        <div className="artist-image-container249">
          <div className="artist-image249">
            <img src={tempImage} alt="Temporary Song Art" />
          </div>
          <h3>Begin Again</h3>
          <p>Taylor Swift</p>
        </div>
        <PlayerControls isPlaying={isPlaying} togglePlayPause={togglePlayPause}  />
        <BuyOptionButton />
      </div>
    </div>
  );
}

function PlayerControls({ isPlaying, togglePlayPause }) {
  return (
    <div className="player-controls">
      <div className="progress-bar">
        <div className="bar">
          <span></span>
        </div>
        <div className="time">
          <p>00:50</p>
          <p className="end">03:20</p>
        </div>
      </div>
      <div className="buttons">
        <button>
          <SkipPreviousIcon fontSize="large" />
        </button>
        <div className="circle">
          <button className="Pause-Play" onClick={togglePlayPause}>
              {isPlaying ? <PauseIcon fontSize="large" className="pause" /> : <PlayArrowIcon fontSize="large" className="play" />}
          </button>
        </div>
        <button>
          <SkipNextIcon fontSize="large" />
        </button>
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

export default Screen254;
