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
        clientId="cbcd404b184023848f87c18cf46f1281"
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
