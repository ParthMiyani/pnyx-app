import { useState, useEffect, useRef } from "react";
import "../../styles/buySongPlayerPage.css";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import tempImage from "../../assets/tempImage.webp";
import BorderButton from "../ui/BorderButton";
import { Link, useLocation } from "react-router-dom";
import { useUserID } from "../../context/UserIDContext";
import { useSelectedSong } from "../../context/SelectedSongsContext";

export default function BuySongPlayerPage() {
  const [isSongBought, setIsSongBought] = useState(false);
  const { state } = useLocation();
  const [userData, setUserData] = useState(null); // State to hold user data
  const { userID } = useUserID();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const { selectedSong } = useSelectedSong(); // Access the selectedSong from the context
  const [selectedSongLoaded, setSelectedSongLoaded] = useState(false);

  // Ensure selectedSong is set before initializing audioRef
  useEffect(() => {
    if (selectedSong) {
      audioRef.current = new Audio(selectedSong.audioUrl);
      setSelectedSongLoaded(true);
    }
  }, [selectedSong]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/users/${userID}`);
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
    setIsPlaying((prevValue) => {
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

  let artistName = "";
  if (selectedSong && selectedSong.artists && selectedSong.artists.length > 1) {
    artistName = selectedSong.artists.join(", ");
  } else if (
    selectedSong &&
    selectedSong.artists &&
    selectedSong.artists.length === 1
  ) {
    artistName = selectedSong.artists[0];
  }

  return (
    <div className="container249">
      <div className="player249">
        <div className="content249">
          {/* <BackButton /> */}
          <div className="oval249">
            <VisibilityOutlinedIcon className="icon249" />
            <div className="page-indicator249">
              {userData && userData.views_left}/5
            </div>
          </div>
          <p className="title249">Discover</p>
        </div>
        <div className="artist-image-container249">
          <div className="artist-image249">
            <img src={tempImage} alt="Temporary Song Art" />
          </div>
          <h3>{selectedSong && selectedSong.title}</h3>
          <p>{artistName}</p>
        </div>
        {selectedSongLoaded && (
          <PlayerControls
            isPlaying={isPlaying}
            togglePlayPause={togglePlayPause}
          />
        )}
        <Link to={isSongBought ? "/purchased-song" : "/song-cart"}>
          <BorderButton title={isSongBought ? "Purchased" : "Buy Now"} />
        </Link>
      </div>
    </div>
  );
}

function PlayerControls({ isPlaying, togglePlayPause }) {
  const { selectedSong } = useSelectedSong(); // Access the selectedSong from the context
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedMinutes = String(minutes).padStart(2, "0"); // Ensure two digits for minutes
    const formattedSeconds = String(remainingSeconds).padStart(2, "0"); // Ensure two digits for seconds
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  let songLength = selectedSong.audioDuration;
  let songTimer = "00:00";
  const [timer, setTimer] = useState(songTimer);

  useEffect(() => {
    let interval;

    if (isPlaying) {
      interval = setInterval(() => {
        const [minutes, seconds] = timer.split(":").map(Number);

        let remainingMinutes = minutes;
        let remainingSeconds = seconds;

        remainingSeconds++;

        if (remainingSeconds > 59) {
          remainingSeconds = 0;
          remainingMinutes++;
        }

        const formattedMinutes = String(remainingMinutes).padStart(2, "0");
        const formattedSeconds = String(remainingSeconds).padStart(2, "0");

        const formattedTime = `${formattedMinutes}:${formattedSeconds}`;

        if (formattedTime > formatTime(songLength)) {
          setTimer("00:00");
          return;
        }

        setTimer(formattedTime);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isPlaying, timer, songLength]);

  return (
    <div className="player-controls">
      <div className="progress-bar">
        <div className="bar">
          <span></span>
        </div>
        <div className="time">
          <p>{timer}</p>
          <p className="end">{formatTime(songLength)}</p>
        </div>
      </div>
      <div className="buttons">
        <button>
          <SkipPreviousIcon fontSize="large" />
        </button>
        <div className="circle">
          <button className="Pause-Play" onClick={togglePlayPause}>
            {isPlaying ? (
              <PauseIcon fontSize="large" className="pause" />
            ) : (
              <PlayArrowIcon fontSize="large" className="play" />
            )}
          </button>
        </div>
        <button>
          <SkipNextIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
}
