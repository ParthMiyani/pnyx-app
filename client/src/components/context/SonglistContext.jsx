// SonglistContext.js
import React, { createContext, useContext, useState } from 'react';

const SonglistContext = createContext();

export const SonglistProvider = ({ children }) => {
  const [responseData, setResponseData] = useState(null);

  const updateResponseData = (data) => {
    setResponseData(data);
  };

  return (
    <SonglistContext.Provider value={{ responseData, updateResponseData }}>
      {children}
    </SonglistContext.Provider>
  );
};

export const useData = () => useContext(SonglistContext);
