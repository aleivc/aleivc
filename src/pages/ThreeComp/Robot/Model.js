import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { PerspectiveCamera, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Model = (props) => {
  const { nodes, materials } = useGLTF("/models/robot.glb");
  const car = useRef();
  const arm1 = useRef();
  const arm2 = useRef();
  const arm3 = useRef();
  const arm4 = useRef();
  const cameraRef = useRef();
  const targetPosition = new THREE.Vector3();
  let currentPosition = new THREE.Vector3();

  useFrame((state, delta, frame) => {
    console.log(state);
    // car.current.position.z += 0.01;
    arm1.current.rotation.y += 0.01;
    arm4.current.rotation.z += 0.01;
    const pos = arm4.current.getWorldPosition(targetPosition);
    state.camera.lookAt(pos);
    state.camera.updateProjectionMatrix();
    // cameraRef.current.lookAt(pos);
    // cameraRef.current.updateProjectionMatrix();
    // cameraRef.current.position.copy(currentPosition);
  });

  return (
    <group ref={car} {...props} dispose={null}>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[10, 10, 10]} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        scale={[1, 0.19, 1.84]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        scale={[0.17, 0.57, 0.17]}
      />
      <group ref={arm1} position={[0, 0.94, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={nodes.Cube004.material}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.17, 0.57, 0.17]}
        />
        <mesh
          ref={arm4}
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={nodes.Cube005.material}
          position={[0.96, 0, 0]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.17, 0.57, 0.17]}
        />
      </group>
    </group>
  );
};

export default Model;
