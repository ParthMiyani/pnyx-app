import './App.css';
import {
  ThirdwebProvider,
  ConnectWallet,
  embeddedWallet,
} from "@thirdweb-dev/react";
import React from 'react';

function App() {
  return (
    <div>
      <ThirdwebProvider
      activeChain="goerli"
      clientId="cbcd404b184023848f87c18cf46f1281"
      supportedWallets={[embeddedWallet("email")]}
    >
      <ConnectWallet />
    </ThirdwebProvider>
    </div>
  );
}

export default App;
