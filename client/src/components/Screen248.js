import React, { useState, useRef, useEffect }  from "react";
import "../styles/Screen248.css";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import WifiIcon from "@mui/icons-material/Wifi";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import TouchAppOutlinedIcon from "@mui/icons-material/TouchAppOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import { useDisconnect } from "@thirdweb-dev/react";
import { Link } from "react-router-dom";
import { useUserID } from "./context/UserIDContext";

function Screen248() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [userData, setUserData] = useState(null); // State to hold user data
  const { userID } = useUserID();
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

  const disconnect = useDisconnect();
  console.log(userID);
  return (
    <div className="container248">
      <div className="player">
        <div className="content">
          <div className="oval">
            <VisibilityOutlinedIcon className="icon" />
            <div className="page-indicator">{userData && userData.views_left}/5</div>
          </div>
          <p className="title">Discover</p>
          <div className="right-oval">
            {/* <ForwardButton /> */}
            <Link to={"/login"}>
              <IconButton aria-label="logout">
                <LogoutIcon className="icon" />
              </IconButton>
            </Link>
          </div>
        </div>
        <PlayerControls isPlaying={isPlaying} togglePlayPause={togglePlayPause} />
      </div>
    </div>
  );
}

function PlayerControls({ isPlaying, togglePlayPause }) {
  const { userID } = useUserID();
  const handleTap = async () => {
    try {
      const response = await fetch(`https://25-pnyx-3hfydn1fl-vidhip30s-projects.vercel.app/users/${userID}/decrement-views-left`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Failed to update views_left");
      }

      // Success message or additional handling
      console.log("Views_left updated successfully");
    } catch (error) {
      console.error("Error updating views_left:", error);
    }
  };

  return (
    <div className="player-controls">
      <Link to={"/buy-song-player"}>
        <div className="tap" onClick={handleTap}>
          <TouchAppOutlinedIcon fontSize="large" />
          <p>Tap to Reveal</p>
        </div>
      </Link>
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

export default Screen248;
