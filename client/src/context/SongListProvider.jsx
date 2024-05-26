// songListProvider.js
import { createContext, useContext, useState } from "react";

const SongListContext = createContext();

export const useSongList = () => useContext(SongListContext);

export const SongListProvider = ({ children }) => {
  const [songList, setSongList] = useState(null);

  return (
    <SongListContext.Provider value={{ songList, setSongList }}>
      {children}
    </SongListContext.Provider>
  );
};
