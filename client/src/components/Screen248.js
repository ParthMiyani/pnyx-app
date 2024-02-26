import React from "react";
import "../styles/Screen248.css";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import WifiIcon from "@mui/icons-material/Wifi";
import PauseIcon from "@mui/icons-material/Pause";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import TouchAppOutlinedIcon from "@mui/icons-material/TouchAppOutlined";

function Screen248() {
  return (
    <div className="container248">
      <div className="player">
        <div className="top">
          <div className="top-left">
            <span>9:41</span>
          </div>
          <div className="top-right">
            <SignalCellularAltIcon className="top-icon" fontSize="small" />
            <WifiIcon className="top-icon" fontSize="small" />
            <BatteryFullIcon className="top-icon" fontSize="small" />
          </div>
        </div>
        <div className="content">
          <div className="oval">
            <VisibilityOutlinedIcon className="icon" />
            <div className="page-indicator">1/5</div>
          </div>
          <p className="title">Discover</p>
        </div>
        <PlayerControls />
      </div>
    </div>
  );
}

function PlayerControls() {
  return (
    <div className="player-controls">
      <div className="tap">
        <TouchAppOutlinedIcon fontSize="large" />
        <p>Tap to Reveal</p>
      </div>
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
          <button>
            <PauseIcon fontSize="large" className="pause" />
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
