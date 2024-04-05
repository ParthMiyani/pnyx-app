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
        clientId="c0fb0959b554df8179142718dfaa8764"
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
