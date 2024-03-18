import React, { createContext, useState, useContext } from 'react';

// Create a context to hold the userID
const UserIDContext = createContext();

// Custom hook to access the userID from the context
export const useUserID = () => useContext(UserIDContext);

// Component to provide the userID to its children
export const UserIDProvider = ({ children }) => {
  const [userID, setUserID] = useState(null);

  return (
    <UserIDContext.Provider value={{ userID, setUserID }}>
      {children}
    </UserIDContext.Provider>
  );
};
