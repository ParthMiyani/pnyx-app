import { useState, useRef, useEffect } from "react";
import "../../styles/hiddenPlayerPage.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import { useDisconnect } from "@thirdweb-dev/react";
import { Link } from "react-router-dom";
import { useUserData } from "../../context/UserDataContext";
import { useSongData } from "../../context/SongDataProvider";
import PlayerControls from "../ui/PlayerControls";
import { useCurrentSong } from "../../context/CurrentSongProvider";

export default function HiddenPlayerPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { userData } = useUserData();
  const audioRef = useRef(null);
  const { songData } = useSongData();
  const [selectedSongLoaded, setSelectedSongLoaded] = useState(false);
  const { setCurrentSong } = useCurrentSong();
  const disconnect = useDisconnect();

  useEffect(() => {
    try {
      if (songData) {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current = null;
        }
        audioRef.current = new Audio(songData[0].link);
        setCurrentSong(songData[0]);
        const handleEnded = () => {
          setIsPlaying(false);
        };

        audioRef.current.addEventListener("ended", handleEnded);
        setSelectedSongLoaded(true);
        return () => {
          if (audioRef.current) {
            audioRef.current.removeEventListener("ended", handleEnded);
            audioRef.current.pause();
          }
        };
      }
    } catch (error) {
      console.error("Error fetching song data:", error);
      setSelectedSongLoaded(false);
    }
  }, [songData]);

  const togglePlayPause = async () => {
    if (!isPlaying) {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    } else {
      audioRef.current.pause();
    }
    setIsPlaying((prevValue) => !prevValue);
  };

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
            currentSong={songData[0]}
            isArtistHidden={true}
          />
        )}
      </div>
    </div>
  );
}
