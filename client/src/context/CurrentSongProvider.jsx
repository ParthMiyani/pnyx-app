// Purpose: Provide the current song to the application.
import { useState, useContext, createContext } from "react";

const CurrentSongContext = createContext();

export const CurrentSongProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <CurrentSongContext.Provider value={{ currentSong, setCurrentSong }}>
      {children}
    </CurrentSongContext.Provider>
  );
};

export const useCurrentSong = () => useContext(CurrentSongContext);
