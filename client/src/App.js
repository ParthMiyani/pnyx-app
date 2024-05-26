import "./App.css";
import { ThirdwebProvider, embeddedWallet } from "@thirdweb-dev/react";
import { RouterProvider } from "react-router-dom";
import appRouter from "./components/route/AppRoute";
import Background from "./components/ui/background/Background";
import "./styles/ui/background/background.css";

const activeChain = "ethereum";

function App() {
  return (
    <div className="App">
      <ThirdwebProvider
        activeChain={activeChain}
        clientId={process.env.REACT_APP_THIRDWEB_CLIENT_ID}
        supportedWallets={[embeddedWallet()]}
      >
        <Background />
        <div className="content">
          <RouterProvider router={appRouter} />
        </div>
      </ThirdwebProvider>
    </div>
  );
}

export default App;
