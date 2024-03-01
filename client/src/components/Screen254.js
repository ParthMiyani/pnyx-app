import React from "react";
import "../styles/Screen249.css";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PauseIcon from "@mui/icons-material/Pause";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import tempImage from "./tempImage.webp";

function Screen254() {
  return (
    <div className="container249">
      <div className="player249">
        <div className="content249">
          <div className="oval249">
            <VisibilityOutlinedIcon className="icon249" />
            <div className="page-indicator249">1/5</div>
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
        <PlayerControls />
        <BuyOptionButton />
      </div>
    </div>
  );
}

function PlayerControls() {
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

function BuyOptionButton() {
  return (
    <div className="buy-button-container249">
      <div className="buy-button249">
        <button>Purchased</button>
      </div>
    </div>
  );
}

export default Screen254;
