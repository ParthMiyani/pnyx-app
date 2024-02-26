import { React, useState, useEffect } from "react";
import "./login.css";
import {
  useWallet,
  useConnectionStatus,
  useAddress,
  useDisconnect,
} from "@thirdweb-dev/react";
import LoginWithEmail from "./loginWithEmail";

function Login() {
  const address = useAddress();
  const disconnect = useDisconnect();
  const connectedWallet = useWallet("embeddedWallet");
  const [email, setEmail] = useState("");
  const connectionStatus = useConnectionStatus();

  useEffect(() => {
    if (connectedWallet) {
      connectedWallet?.getEmail().then((email) => setEmail(email));
    }
  }, [connectedWallet]);

  return (
    <div className="login">
      <div className="title-text first">WELCOME TO</div>
      <div className="title-text second">PNYX</div>
      <div className="sub-text">REFERRED BY TAYLOR SWIFT</div>
      {address ? (
        <>
          <h3>Connected as {email}</h3>
          <p>Your wallet: {address}</p>
          <button className="input-style login-button" onClick={disconnect}>
            Log out
          </button>
        </>
      ) : (
        <>
          {connectionStatus === "disconnected" ? (
            <>
              <LoginWithEmail />
            </>
          ) : (
            <div className="" /> // create lodding page.
          )}
        </>
      )}
    </div>
  );
}

export default Login;
