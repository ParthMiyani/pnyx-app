import { React, useState, useEffect } from "react";
import "../styles/login.css";
import {
  useWallet,
  useConnectionStatus,
  useAddress,
  useDisconnect,
} from "@thirdweb-dev/react";
import LoginWithEmail from "./LoginWithEmail";
import { Link, Outlet } from "react-router-dom";

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
          <Link to="/choose-artists">
            <button className="input-style login-button">Continue</button>
          </Link>
          <Outlet />
        </>
      ) : (
        <>
          {connectionStatus === "disconnected" ? (
            <>
              <LoginWithEmail />
            </>
          ) : (
            <div className="" /> // TODO: add lodding page.
          )}
        </>
      )}
    </div>
  );
}

export default Login;
