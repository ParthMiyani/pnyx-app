import { React, useState } from "react";
import { useEmbeddedWallet } from "@thirdweb-dev/react";
import "../styles/loginWithEmail.css";
import { Link, Outlet } from "react-router-dom";
import BorderButton from "../components/ui/BorderButton";

export default function LoginWithEmail() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(""); // ["", "enter email" | "enter verification code"]
  const [state, setState] = useState("init"); // "init" | "emter_email" | "sending_email" | "email_verification"
  const [verificationCode, setVerificationCode] = useState("");
  const { connect, sendVerificationEmail } = useEmbeddedWallet();

  const handleEmailClicked = async () => {
    setState("emter_email");
  };

  const handleEmailEntered = async () => {
    if (!email) {
      setError("enter email");
      return;
    }
    setState("sending_email");
    await sendVerificationEmail({ email });
    setState("email_verification");
  };

  const handleEmailVerification = async () => {
    if (!email || !verificationCode) {
      setError("enter verification code");
      return;
    }
    await connect({ strategy: "email_verification", email, verificationCode });
  };

  if (state === "emter_email") {
    return (
      <>
        <input
          className="input-style email-input"
          placeholder="Enter email address"
          id="email"
          name="email"
          type="email"
          value={email}
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>{error === "enter email" ? "Please enter an email" : ""}</p>
        <BorderButton title="Continue" onClick={handleEmailEntered} />
        <BorderButton title="Go Back" onClick={() => setState("init")} />
      </>
    );
  }

  if (state === "sending_email") {
    return <div className="" />; // create lodding page.
  }

  if (state === "email_verification") {
    return (
      <>
        <p>Enter the verification code sent to your email</p>
        <input
          className="input-style email-input"
          placeholder="Enter verification code"
          id="verificationCode"
          name="verificationCode"
          type="text"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          autoComplete="off"
        />
        <div>
          {error === "enter verification code" ? "Please enter a code" : ""}
        </div>
        <Link to="/choose-artists">
          <BorderButton title="Verify" onClick={handleEmailVerification} />
        </Link>
        <Outlet />
        <BorderButton title="Go Back" onClick={() => setState("init")} />
      </>
    );
  }

  return (
    <div>
      <BorderButton title="Log In With Email" onClick={handleEmailClicked} />
    </div>
  );
}
