import { useState, useEffect, Suspense } from "react";
import "../../styles/loginPage.css";
import {
  useWallet,
  useConnectionStatus,
  useAddress,
} from "@thirdweb-dev/react";
import LoginWithEmail from "../loginWithEmail";
import { Link, Outlet } from "react-router-dom";
import BorderButton from "../ui/BorderButton";
import { Canvas } from "@react-three/fiber";
import Model from '../cube/Cube.tsx';
import { OrbitControls } from "@react-three/drei";

export default function LoginPage() {
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
      <div className="cube">
        <Canvas> 
          <OrbitControls enablePan={false} />
          <directionalLight position={[1, 0, 0]} args={['#2806a6', 5]} />
          <directionalLight position={[-1, 0, 0]} args={['#4000ed', 0.5]} />
          <directionalLight position={[0, 0, 1]} args={['#4000ed', 5]} />
          <directionalLight position={[0, 0, -1]} args={['#4000ed', 3]} />
          <directionalLight position={[0, 1, 0]} args={['#4000ed', 5]} />
          <directionalLight position={[0, -1, 0]} args={['#2806a6', 2]} />
          <Suspense fallback={null}>
            <Model>
            <meshPhysicalMaterial 
              metalness={10} // Adjust the metalness to control reflectivity
              roughness={0.1} // Adjust the roughness to control surface smoothness
              transmission={10} // Sets the transmission to simulate transparency
              opacity={0.8} // Sets the opacity for the glass-like effect
              transparent
            />
            </Model>
          </Suspense>
        </Canvas>
      </div>
      
      {address ? (
        <>
          <Link to="/choose-artists">
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
