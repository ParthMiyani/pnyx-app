import { useState, useEffect, useRef } from "react";
import "../styles/Screen249.css";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import tempImage from "./tempImage.webp";
import BorderButton from "../components/ui/BorderButton";
import BackButton from "./Screen251/BackButton";
import { Link, useLocation } from "react-router-dom";

function Screen249() {
  const [isSongBought, setIsSongBought] = useState(false);
  const { state } = useLocation();

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"));

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

  useEffect(() => {
    console.log(state);
    if (state?.key) {
      setIsSongBought(state?.key);
    }
  }, [state]);

  return (
    <div className="container249">
      <div className="player249">
        <div className="content249">
          {/* <BackButton /> */}
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
        <PlayerControls isPlaying={isPlaying} togglePlayPause={togglePlayPause} />
        <Link to={isSongBought ? "/purchased-song" : "/song-cart"}>
          <BorderButton title={isSongBought ? "Purchased" : "Buy Now"} />
        </Link>
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

export default Screen249;
