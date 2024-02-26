import "./App.css";
import React from "react";
import Login from "./components/login";
import GridBackground from "./components/gridBackground";
import { ThirdwebProvider, embeddedWallet } from "@thirdweb-dev/react";

const activeChain = "ethereum";

function App() {
  return (
    <div className="App">
      <ThirdwebProvider
        activeChain={activeChain}
        clientId={process.env.REACT_APP_THIRDWEB_CLIENT_ID}
        supportedWallets={[embeddedWallet()]}
      >
        <div className="bg-grid">
          <div className="bg-grid-top">
            <GridBackground
              rotate={"180deg"}
              gridGradient="linear-gradient( #000 0%, #AA004F 100%)"
            />
          </div>
          <div className="bg-grid-bottom">
            <GridBackground
              rotate={"0deg"}
              gridGradient="linear-gradient( #000 0%, #7400DB 100%)"
            />
          </div>
        </div>

        <div className="content">
          <Login />
        </div>
      </ThirdwebProvider>
    </div>
  );
}

export default App;
