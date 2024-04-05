/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei/native";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    cube27: THREE.Mesh;
    cube28: THREE.Mesh;
    cube29: THREE.Mesh;
    cube30: THREE.Mesh;
    cube31: THREE.Mesh;
    cube32: THREE.Mesh;
    cube33: THREE.Mesh;
    cube34: THREE.Mesh;
  };
  materials: {
    Windows: THREE.MeshStandardMaterial;
  };
};

type ActionName =
  | "EmptyAction"
  | "CUBEAction"
  | "single colored cube.027Action.004"
  | "single colored cube.028Action.004"
  | "single colored cube.029Action.004"
  | "single colored cube.030Action.004"
  | "single colored cube.031Action.004"
  | "single colored cube.032Action.003"
  | "single colored cube.033Action.004"
  | "single colored cube.034Action.003";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    require("../models/TestAnimation.glb")
  ) as GLTFResult;
  const { actions, names } = useAnimations<GLTFActions>(animations, group);

  // Code to run the animation 
  useEffect(() => {
    names.forEach((animation) => {
      actions?.[animation]?.play();
    });
  }, [actions, names]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Empty">
          <group name="CUBE" rotation={[0.505, 0.788, 0]} scale={5.425}>
            <mesh
              name="cube27"
              castShadow
              receiveShadow
              geometry={nodes.cube27.geometry}
              material={materials.Windows}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="cube28"
              castShadow
              receiveShadow
              geometry={nodes.cube28.geometry}
              material={materials.Windows}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="cube29"
              castShadow
              receiveShadow
              geometry={nodes.cube29.geometry}
              material={materials.Windows}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="cube30"
              castShadow
              receiveShadow
              geometry={nodes.cube30.geometry}
              material={materials.Windows}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="cube31"
              castShadow
              receiveShadow
              geometry={nodes.cube31.geometry}
              material={materials.Windows}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="cube32"
              castShadow
              receiveShadow
              geometry={nodes.cube32.geometry}
              material={materials.Windows}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="cube33"
              castShadow
              receiveShadow
              geometry={nodes.cube33.geometry}
              material={materials.Windows}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="cube34"
              castShadow
              receiveShadow
              geometry={nodes.cube34.geometry}
              material={materials.Windows}
              rotation={[Math.PI / 2, 0, 0]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

// useGLTF.preload("/TestAnimation.glb");