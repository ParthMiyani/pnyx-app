import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserData } from "../../context/UserDataContext";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import TouchAppOutlinedIcon from "@mui/icons-material/TouchAppOutlined";
import { fetchViewCount } from "../../api/fetchViewCount";

export default function PlayerControls({
  isPlaying,
  togglePlayPause,
  currentSong,
  isArtistHidden,
}) {
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedMinutes = String(minutes).padStart(2, "0"); // Ensure two digits for minutes
    const formattedSeconds = String(remainingSeconds).padStart(2, "0"); // Ensure two digits for seconds
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  let songLength = currentSong.duration;
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

  const { userData } = useUserData();
  const handleTap = async () => {
    try {
      // TODO: toast message for no views_left
      console.log("userData", userData);
      await fetchViewCount(userData.userid);
    } catch (error) {
      console.error("Error updating views_left:", error);
    }
  };

  return (
    <div className="player-controls">
      {isArtistHidden ? (
        <Link to={"/buy-song-player"}>
          <div className="tap" onClick={handleTap}>
            <TouchAppOutlinedIcon fontSize="large" />
            <p>Tap to Reveal</p>
          </div>
        </Link>
      ) : (
        <div className="">
          <div className="song-info">
            <p>{currentSong.song_name}</p>
            {currentSong.song_artist.length > 1 && (
              <p>{currentSong.song_artist[0] + "..."}</p>
            )}
            <p>{currentSong.song_artist.join(", ")}</p>
          </div>
        </div>
      )}

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
