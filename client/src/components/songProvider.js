// songProvider.js
import songList from "../songList/pnyx-similarity-search-drake-weeknd-2_1.json";

const getSelectedSong = (songListIndex, trackIndex) => {
  let selectedSong = null;
  if (
    songList &&
    Object.keys(songList).length > 0
  ) {
    const song = songList[JSON.stringify(songListIndex)].tracks[trackIndex];
    selectedSong = {
      title: song.metadata.track_title,
      artists: song.metadata.artists,
      audioUrl: song.metadata.harmix_audio_url,
      audioDuration: song.metadata.duration,
      price: song.metadata.price,
      timeLeft: song.metadata.hours_left,
    };
  }
  return selectedSong;
};

export default getSelectedSong;
