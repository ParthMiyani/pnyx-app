// songDataProvider.jsx
import { createContext, useState, useContext } from "react";

const SongDataContext = createContext();

export const SongDataProvider = ({ children }) => {
  const [songData, setSongData] = useState([]);

  return (
    <SongDataContext.Provider value={{ songData, setSongData }}>
      {children}
    </SongDataContext.Provider>
  );
};

export const useSongData = () => useContext(SongDataContext);
