import { useState, useRef, useEffect } from "react";
import "../../styles/hiddenPlayerPage.css";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import TouchAppOutlinedIcon from "@mui/icons-material/TouchAppOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import { useDisconnect } from "@thirdweb-dev/react";
import { Link } from "react-router-dom";
import { useUserID } from "../../context/UserIDContext";
import { useData } from "../../context/SonglistContext";
import { useSelectedSong } from "../../context/SelectedSongsContext";
import getSelectedSong from "../songProvider";

export default function HiddenPlayerPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [userData, setUserData] = useState(null); // State to hold user data
  const { userID } = useUserID();
  const audioRef = useRef(null);
  const { responseData } = useData(); // Access responseData from the context
  const { setSelectedSong } = useSelectedSong(); // Access setSelectedSong from the context
  const [selectedSongLoaded, setSelectedSongLoaded] = useState(false); // State to track if selected song is loaded

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

        // Fetch audio URL when userData is fetched
        const audioResponse = await fetch(
          "http://127.0.0.1:5000/get_audio_url",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              track_title: responseData.recommendations[0], // Assuming recommendations exist in userData
            }),
          }
        );
        if (!audioResponse.ok) {
          throw new Error("Failed to fetch audio URL");
        }
        const { songList, track } = await audioResponse.json();
        const songListAsNumber = parseInt(songList, 10);
        const selectedSong = getSelectedSong(songListAsNumber, track - 1);
        console.log(selectedSong);
        setSelectedSong(selectedSong); // Set the selected song in the context
        audioRef.current = new Audio(selectedSong.audioUrl);
        setSelectedSongLoaded(true); // Set selectedSongLoaded to true
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Any cleanup code if needed
    };
  }, [setSelectedSong, userID]); // Fetch data whenever userID changes

  const togglePlayPause = () => {
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying((prevValue) => !prevValue);
  };

  const disconnect = useDisconnect();
  console.log(userID);
  return (
    <div className="container248">
      <div className="player">
        <div className="content">
          <div className="oval">
            <VisibilityOutlinedIcon className="icon" />
            <div className="page-indicator">
              {userData && userData.views_left}/5
            </div>
          </div>
          <p className="title">Discover</p>
          <div className="right-oval">
            {/* <ForwardButton /> */}
            <Link to={"/"}>
              <IconButton aria-label="logout" onClick={disconnect}>
                <LogoutIcon className="icon" />
              </IconButton>
            </Link>
          </div>
        </div>
        {selectedSongLoaded && (
          <PlayerControls
            isPlaying={isPlaying}
            togglePlayPause={togglePlayPause}
          />
        )}
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

  const { userID } = useUserID();
  const handleTap = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/users/${userID}/decrement-views-left`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

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
