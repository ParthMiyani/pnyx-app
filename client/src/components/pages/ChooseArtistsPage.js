import React, { useState, Suspense } from "react";
import "../../styles/chooseArtistsPage.css";
import BackButton from "../ui/BackButton";
import ForwardButton from "../ui/ForwardButton";
import Searchbar from "../ui/Searchbar";
import { Canvas } from "@react-three/fiber";
import Model from '../cube/Cube.tsx';
import { OrbitControls } from "@react-three/drei";

export default function ChooseArtistsPage() {
  const [selectedArtist, setSelectedArtist] = useState(null);

  return (
    <div className="screen-container">
      <div className="header">
        <BackButton />
        <p>Choose some songs</p>
        <ForwardButton selectedArtist={selectedArtist} />
      </div>
      <div className="subheader">
        <p>
          Select a minimum of 1 song, so we can generate a playlist for you.
        </p>
      </div>
      <div className="cube1">
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
      <div className="searchbar">
        <Searchbar setSelectedArtist={setSelectedArtist} />
      </div>
    </div>
  );
}
