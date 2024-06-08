// referedByProvider.jsx
import { createContext, useState, useContext } from "react";

const ReferedByContext = createContext();

export const ReferedByProvider = ({ children }) => {
  const [referedBy, setReferedBy] = useState(null);

  return (
    <ReferedByContext.Provider value={{ referedBy, setReferedBy }}>
      {children}
    </ReferedByContext.Provider>
  );
};

export const useReferedBy = () => useContext(ReferedByContext);
