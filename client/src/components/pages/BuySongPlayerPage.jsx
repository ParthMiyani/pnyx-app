import { useState, useEffect, useRef } from "react";
import "../../styles/buySongPlayerPage.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import tempImage from "../../assets/tempImage.webp";
import BorderButton from "../ui/BorderButton";
import { Link, useLocation } from "react-router-dom";
import { useUserData } from "../../context/UserDataContext";
import PlayerControls from "../ui/PlayerControls";
import { useCurrentSong } from "../../context/CurrentSongProvider";
import { useDisconnect } from "@thirdweb-dev/react";
import { IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

export default function BuySongPlayerPage() {
  const [isSongBought, setIsSongBought] = useState(false);
  const { state } = useLocation();
  const { userData } = useUserData();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [selectedSongLoaded, setSelectedSongLoaded] = useState(false);
  const { currentSong } = useCurrentSong();
  const disconnect = useDisconnect();

  useEffect(() => {
    try {
      if (currentSong) {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current = null;
        }
        audioRef.current = new Audio(currentSong.link);

        const handleEnded = () => {
          setIsPlaying(false);
        };

        audioRef.current.addEventListener("ended", handleEnded);
        setSelectedSongLoaded(true);
        console.log("loading s");
        return () => {
          if (audioRef.current) {
            audioRef.current.removeEventListener("ended", handleEnded);
            audioRef.current.pause(); // Clean up on component unmount
          }
        };
      }
    } catch (error) {
      console.error("Error fetching song data:", error);
      setSelectedSongLoaded(false);
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
          <h3>{state && state.currentSong.title}</h3>
        </div>
        {selectedSongLoaded && (
          <PlayerControls
            isPlaying={isPlaying}
            togglePlayPause={togglePlayPause}
            currentSong={currentSong}
          />
        )}
        <Link to={isSongBought ? "/purchased-song" : "/song-cart"}>
          <BorderButton title={isSongBought ? "Purchased" : "Buy Now"} />
        </Link>
      </div>
    </div>
  );
}
