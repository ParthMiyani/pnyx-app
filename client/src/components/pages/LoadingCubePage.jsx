import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/loadingCubePage.css";
import cube from "../../assets/Cube.png";
import { useReferedBy } from "../../context/ReferedByProvider";
import { fetchSongRecommend } from "../../api/fetchSongRecommend";
import { fetchSongData } from "../../api/fetchSongData";
import { useSongList } from "../../context/SongListProvider";
import { useSongData } from "../../context/SongDataProvider";

export default function LoadingCubePage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { referedBy } = useReferedBy();
  const { songList, setSongList } = useSongList();
  const { songData, setSongData } = useSongData();
  const finalArtist = referedBy ? referedBy : state && state.artist;

  useEffect(() => {
    const getSongList = async () => {
      try {
        const songRecoList = await fetchSongRecommend(finalArtist);
        setSongList(songRecoList);
      } catch (error) {
        console.error("error in loading cude fetch song" + error);
      }
    };
    getSongList();
  }, [finalArtist]);

  useEffect(() => {
    const getSongData = async () => {
      try {
        if (!songList) return;
        const songDt = await fetchSongData(songList);
        setSongData(songDt);
      } catch (error) {
        console.error("error in loading cude fetch song data" + error);
      }
    };
    getSongData();
  }, [songList]);

  useEffect(() => {
    if (songData) {
      if (songData.length > 0) {
        navigate("/hidden-player");
      }
    }
  }, [songData]);

  return (
    <div className="screen-container">
      <div className="imgContainer253">
        <img src={cube} alt="Cube" />
      </div>
      <div className="loadingText">
        <p>
          Generating playlist <span className="dot-animation">...</span>
        </p>
      </div>
    </div>
  );
}
