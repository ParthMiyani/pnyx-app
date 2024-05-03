import { useEffect, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/loadingCubePage.css";
import cube from "../../assets/Cube.png";
import { Canvas } from "@react-three/fiber";
import Model from '../cube/Cube.tsx';
import { OrbitControls } from "@react-three/drei";

export default function LoadingCubePage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      console.log("timer done");
      navigate("/hidden-player");
    }, 3000);
  });

  return (
    <div className="screen-container">
      <div className="cube2">
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
      <div className="loadingText">
        <p>
          Generating playlist <span className="dot-animation">...</span>
        </p>
      </div>
    </div>
  );
}
