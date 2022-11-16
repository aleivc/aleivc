import * as THREE from "three";
import React, { useRef } from "react";
import { PerspectiveCamera, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Model = (props) => {
  const { nodes, materials } = useGLTF("/models/robot.glb");
  const car = useRef();
  const arm1 = useRef();

  const arm4 = useRef();
  const cameraRef = useRef();
  const targetPosition = new THREE.Vector3();
  const currentPosition = new THREE.Vector3();
  const vec = new THREE.Vector3();

  const coord1 = useRef();

  useFrame((state, delta, frame) => {
    // car.current.position.z += 0.01;
    // car.current.rotation.y += 0.01;
    //
    arm1.current.rotation.y += 0.01;
    arm4.current.rotation.z += 0.01;
    if (props.mode) {
      const pos = arm4.current.getWorldPosition(targetPosition);
      state.camera.lookAt(pos);
      state.camera.position.copy(currentPosition);
      state.camera.updateProjectionMatrix();
    } else {
      state.camera.position.lerp(vec.set(10, 10, 10), 0.1);
    }
  });

  return (
    <group {...props} dispose={null}>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[10, 10, 10]} />;
      <group ref={car}>
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
      <group position={[4.26, 0, 5.09]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.coord1.geometry}
          material={nodes.coord1.material}
          position={[-8.59, 0, -5.09]}
          scale={0.1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.coord2.geometry}
          material={nodes.coord2.material}
          position={[-8.59, 0, 0]}
          scale={0.1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.coord3.geometry}
          material={nodes.coord3.material}
          position={[-4.37, 0, 0]}
          scale={0.1}
        />
        <mesh
          ref={coord1}
          castShadow
          receiveShadow
          geometry={nodes.coord4.geometry}
          material={nodes.coord4.material}
          scale={0.1}
        >
          <meshStandardMaterial color={"hotpink"} />
        </mesh>
      </group>
    </group>
  );
};

export default Model;
