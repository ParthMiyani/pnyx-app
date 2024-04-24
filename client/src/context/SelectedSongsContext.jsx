// SelectedSongContext.js
import { createContext, useState, useContext } from "react";

// Create a new context
const SelectedSongContext = createContext();

// Create a provider component
export const SelectedSongProvider = ({ children }) => {
  const [selectedSong, setSelectedSong] = useState(null);

  return (
    <SelectedSongContext.Provider value={{ selectedSong, setSelectedSong }}>
      {children}
    </SelectedSongContext.Provider>
  );
};

// Create a custom hook to use the context
export const useSelectedSong = () => useContext(SelectedSongContext);

export default SelectedSongContext; // Exporting the context itself
