import { createContext, useState, useContext } from "react";

// Create a new context
const ReferedByContext = createContext();

// Create a provider component
export const ReferedByProvider = ({ children }) => {
  const [referedBy, setReferedBy] = useState(null);

  return (
    <ReferedByContext.Provider value={{ referedBy, setReferedBy }}>
      {children}
    </ReferedByContext.Provider>
  );
};

// Create a custom hook to use the context
export const useReferedBy = () => useContext(ReferedByContext);
