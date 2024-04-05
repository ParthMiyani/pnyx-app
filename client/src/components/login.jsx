import { useState, useEffect } from "react";
import "../styles/login.css";
import {
  useWallet,
  useConnectionStatus,
  useAddress,
} from "@thirdweb-dev/react";
import LoginWithEmail from "./loginWithEmail";
import { Link, Outlet } from "react-router-dom";
import BorderButton from "../components/ui/BorderButton";

function Login() {
  const address = useAddress();
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
          <Link to="/25-pnyx/choose-artists">
            <BorderButton title="Continue" />
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
