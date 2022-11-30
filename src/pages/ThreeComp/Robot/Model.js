import * as THREE from "three";
import React, { useRef } from "react";
import { PerspectiveCamera, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Model = (props) => {
  const { nodes, materials } = useGLTF("/models/car1.glb");
  const car = useRef();
  const arm1 = useRef();
  const arm2 = useRef();
  const arm3 = useRef();
  const arm4 = useRef();
  const arm5 = useRef();
  const arm6 = useRef();

  const cameraRef = useRef();
  const targetPosition = new THREE.Vector3();
  const currentPosition = new THREE.Vector3();
  const vec = new THREE.Vector3();

  const coord1 = useRef();

  // const ref1 = useRef();
  // const ref2 = useRef();
  // const ref3 = useRef();

  useFrame(() => {
    // arm1.current.rotation.y -= 0.01;
    // arm2.current.rotation.z -= 0.01;
    // arm3.current.rotation.z -= 0.01;
    // arm4.current.rotation.z -= 0.01;
    // arm5.current.rotation.x -= 0.01;
    // arm6.current.rotation.x -= 0.01;
  });

  useFrame((state, delta, frame) => {
    // 左
    // car.current.position.z -= 0.01;
    // 右
    // car.current.position.z += 0.01;
    // 上
    // car.current.position.x -= 0.01;
    // 下
    // car.current.position.x += 0.01;
    // 右转
    // car.current.rotation.y -= 0.01;
    // 左转
    // car.current.rotation.y += 0.01;
    // arm1.current.rotation.y += 0.01;
    // arm4.current.rotation.z += 0.01;
    // if (props.mode) {
    //   const pos = arm4.current.getWorldPosition(targetPosition);
    //   state.camera.lookAt(pos);
    //   state.camera.position.copy(currentPosition);
    //   state.camera.updateProjectionMatrix();
    // } else {
    //   state.camera.position.lerp(vec.set(10, 10, 10), 0.1);
    // }
  });

  return (
    <group {...props} dispose={null}>
      <group
        position={[0.37, -0.01, 12.09]}
        rotation={[Math.PI, -1.52, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装012"].geometry}
          material={materials["Material.014"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装023"].geometry}
          material={materials["Material.078"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装024"].geometry}
          material={materials["default.002"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装026"].geometry}
          material={materials["default.003"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装027"].geometry}
          material={materials["Material.068"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装033"].geometry}
          material={materials["Material.013"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装035"].geometry}
          material={materials["Material.031"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装037"].geometry}
          material={materials["Material.030"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装038"].geometry}
          material={materials["default.004"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装039"].geometry}
          material={materials["Material.002"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装040"].geometry}
          material={materials["Material.010"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装041"].geometry}
          material={materials["default.005"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装042"].geometry}
          material={materials["Material.017"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装043"].geometry}
          material={materials["default.006"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装044"].geometry}
          material={materials["default.007"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装045"].geometry}
          material={materials["default.008"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装046"].geometry}
          material={materials["default.009"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装047"].geometry}
          material={materials["Material.016"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装169"].geometry}
          material={materials["Material.015"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装170"].geometry}
          material={materials["default.010"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装171"].geometry}
          material={materials["Material.004"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装172"].geometry}
          material={materials["Material.006"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装173"].geometry}
          material={materials["default.011"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装174"].geometry}
          material={materials["Material.019"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装175"].geometry}
          material={materials["default.012"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装176"].geometry}
          material={materials["default.013"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装177"].geometry}
          material={materials["default.014"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装178"].geometry}
          material={materials["Material.007"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装179"].geometry}
          material={materials["default.015"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装334"].geometry}
          material={materials["Material.065"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装348"].geometry}
          material={materials["Material.012"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装363"].geometry}
          material={materials["Material.066"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装364"].geometry}
          material={materials["default.016"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装365"].geometry}
          material={materials["Material.067"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装377"].geometry}
          material={materials["default.017"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装398"].geometry}
          material={materials["Material.095"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装399"].geometry}
          material={materials["Material.094"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装405"].geometry}
          material={materials["Material.093"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装406"].geometry}
          material={materials["Material.092"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装420"].geometry}
          material={materials["Material.069"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装421"].geometry}
          material={materials["default.019"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装422"].geometry}
          material={materials["Material.018"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装423"].geometry}
          material={materials["default.020"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装424"].geometry}
          material={materials["default.021"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装425"].geometry}
          material={materials["Material.003"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装426"].geometry}
          material={materials["Material.009"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装427"].geometry}
          material={materials["default.022"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装428"].geometry}
          material={materials["default.023"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装429"].geometry}
          material={materials["Material.070"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装430"].geometry}
          material={materials["default.024"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装440"].geometry}
          material={materials["Material.011"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装447"].geometry}
          material={materials["Material.099"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装448"].geometry}
          material={materials["Material.098"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装451"].geometry}
          material={materials["default.026"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装452"].geometry}
          material={materials["Material.005"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装453"].geometry}
          material={materials["Material.008"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装454"].geometry}
          material={materials["default.027"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装455"].geometry}
          material={materials["Material.020"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装456"].geometry}
          material={materials["default.028"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装457"].geometry}
          material={materials["default.029"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装458"].geometry}
          material={materials["default.030"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装459"].geometry}
          material={materials["default.031"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装463"].geometry}
          material={materials["default.032"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装468"].geometry}
          material={materials["Material.101"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装491"].geometry}
          material={materials["default.033"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装495"].geometry}
          material={materials["default.034"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装516"].geometry}
          material={materials["Material.040"]}
          position={[-0.27, 0.45, -0.04]}
          rotation={[-Math.PI, 1.33, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装546"].geometry}
          material={materials["default.060"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装547"].geometry}
          material={materials["default.061"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装548"].geometry}
          material={materials["default.062"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装549"].geometry}
          material={materials["default.063"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装552"].geometry}
          material={materials["default.066"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装553"].geometry}
          material={materials["default.067"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装554"].geometry}
          material={materials["Material.039"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装556"].geometry}
          material={materials["default.068"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装558"].geometry}
          material={materials["default.069"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装559"].geometry}
          material={materials["default.070"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装563"].geometry}
          material={materials["default.071"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装564"].geometry}
          material={materials["default.072"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装565"].geometry}
          material={materials["default.073"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装570"].geometry}
          material={materials["default.074"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装573"].geometry}
          material={materials["default.075"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装574"].geometry}
          material={materials["default.076"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装575"].geometry}
          material={materials["default.077"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装576"].geometry}
          material={materials["default.078"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装577"].geometry}
          material={materials["default.079"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装578"].geometry}
          material={materials["default.080"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装579"].geometry}
          material={materials["default.081"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装580"].geometry}
          material={materials["default.082"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装581"].geometry}
          material={materials["default.083"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装583"].geometry}
          material={materials["default.084"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装588"].geometry}
          material={materials["Material.038"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装687"].geometry}
          material={materials["Material.035"]}
          position={[-0.27, 0.44, -0.2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装688"].geometry}
          material={materials["Material.034"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装689"].geometry}
          material={materials["Material.071"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装690"].geometry}
          material={materials["Material.021"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装691"].geometry}
          material={materials["Material.025"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装692"].geometry}
          material={materials["Material.024"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装693"].geometry}
          material={materials["Material.022"]}
          position={[-0.53, -0.43, -0.51]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装694"].geometry}
          material={materials["Material.026"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装695"].geometry}
          material={materials["Material.027"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装696"].geometry}
          material={materials["Material.023"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装697"].geometry}
          material={materials["Material.036"]}
          position={[-0.27, 0.44, 0.11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装698"].geometry}
          material={materials["Material.033"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装699"].geometry}
          material={materials["Material.037"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装700"].geometry}
          material={materials["Material.032"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装701"].geometry}
          material={materials["Material.073"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装702"].geometry}
          material={materials["default.087"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装703"].geometry}
          material={materials["default.088"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装704"].geometry}
          material={materials["Material.072"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装705"].geometry}
          material={materials["Material.081"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装706"].geometry}
          material={materials["Material.076"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装707"].geometry}
          material={materials["Material.082"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装708"].geometry}
          material={materials["Material.075"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装709"].geometry}
          material={materials["default.089"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装710"].geometry}
          material={materials["Material.084"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装711"].geometry}
          material={materials["Material.079"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装712"].geometry}
          material={materials["default.090"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装713"].geometry}
          material={materials["default.091"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装714"].geometry}
          material={materials["Material.080"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装715"].geometry}
          material={materials["default.092"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装716"].geometry}
          material={materials["default.093"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装717"].geometry}
          material={materials["default.094"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装718"].geometry}
          material={materials["default.095"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装719"].geometry}
          material={materials["default.096"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装720"].geometry}
          material={materials["default.097"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装721"].geometry}
          material={materials["Material.083"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装722"].geometry}
          material={materials["default.098"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装723"].geometry}
          material={materials["default.099"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装724"].geometry}
          material={materials["Material.077"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.超1.geometry}
          material={materials["Material.053"]}
          position={[0.31, -0.18, -0.43]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.超2.geometry}
          material={materials["Material.054"]}
          position={[-0.31, -0.18, -0.43]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.超3.geometry}
          material={materials["Material.055"]}
          position={[-0.8, -0.18, -0.32]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.超4.geometry}
          material={materials["Material.056"]}
          position={[-0.8, -0.18, 0.22]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.超5.geometry}
          material={materials["Material.057"]}
          position={[-0.31, -0.18, 0.33]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.超6.geometry}
          material={materials["Material.058"]}
          position={[0.31, -0.18, 0.33]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.超7.geometry}
          material={materials["Material.059"]}
          position={[0.8, -0.18, 0.22]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.超8.geometry}
          material={materials["Material.060"]}
          position={[0.8, -0.18, -0.32]}
          scale={0.01}
        />
      </group>
      <group position={[-2.98, -0.43, -0.03]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装001"].geometry}
          material={materials.track_02}
          position={[-4.24, 0.01, 2.86]}
          scale={[2.91, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装002"].geometry}
          material={materials.track_02}
          position={[-4.24, 0.01, 5.57]}
          scale={[2.91, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装003"].geometry}
          material={materials.track_02}
          position={[-4.24, 0.01, -2.85]}
          scale={[2.91, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装004"].geometry}
          material={materials.track_02}
          position={[-4.24, 0.01, -5.85]}
          scale={[2.91, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装496"].geometry}
          material={materials.track_02}
          position={[-4.24, 0.01, 0.26]}
          scale={[2.91, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装498"].geometry}
          material={materials["Material.103"]}
          position={[1.32, -0.02, 0.03]}
          scale={[8.08, 2.74, 35.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.track_01.geometry}
          material={materials["Material.001"]}
          position={[-4.24, 0.01, -0.29]}
          scale={[2.91, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.track_01001.geometry}
          material={materials["Material.001"]}
          position={[-4.24, 0.01, 2.31]}
          scale={[2.91, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.track_01002.geometry}
          material={materials["Material.001"]}
          position={[-4.24, 0.01, 5.02]}
          scale={[2.91, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.track_01003.geometry}
          material={materials["Material.001"]}
          position={[-4.24, 0.01, -3.4]}
          scale={[2.91, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.track_01004.geometry}
          material={materials["Material.001"]}
          position={[-4.24, 0.01, -6.4]}
          scale={[2.91, 1, 1]}
        />
      </group>
      <group
        position={[2.1, -0.01, 12.09]}
        rotation={[Math.PI, -1.52, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装018"].geometry}
          material={materials["Material.014"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装019"].geometry}
          material={materials["Material.078"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装020"].geometry}
          material={materials["default.002"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装021"].geometry}
          material={materials["default.003"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装022"].geometry}
          material={materials["Material.068"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装025"].geometry}
          material={materials["Material.013"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装028"].geometry}
          material={materials["Material.031"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装029"].geometry}
          material={materials["Material.030"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装030"].geometry}
          material={materials["default.004"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装031"].geometry}
          material={materials["Material.002"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装032"].geometry}
          material={materials["Material.010"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装034"].geometry}
          material={materials["default.005"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装036"].geometry}
          material={materials["Material.017"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装048"].geometry}
          material={materials["default.006"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装049"].geometry}
          material={materials["default.007"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装050"].geometry}
          material={materials["default.008"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装051"].geometry}
          material={materials["default.009"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装052"].geometry}
          material={materials["Material.016"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装053"].geometry}
          material={materials["Material.015"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装054"].geometry}
          material={materials["default.010"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装055"].geometry}
          material={materials["Material.004"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装056"].geometry}
          material={materials["Material.006"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装057"].geometry}
          material={materials["default.011"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装058"].geometry}
          material={materials["Material.019"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装059"].geometry}
          material={materials["default.012"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装060"].geometry}
          material={materials["default.013"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装061"].geometry}
          material={materials["default.014"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装062"].geometry}
          material={materials["Material.007"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装063"].geometry}
          material={materials["default.015"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装064"].geometry}
          material={materials["Material.065"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装065"].geometry}
          material={materials["Material.012"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装066"].geometry}
          material={materials["Material.066"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装067"].geometry}
          material={materials["default.016"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装068"].geometry}
          material={materials["Material.067"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装069"].geometry}
          material={materials["default.017"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装070"].geometry}
          material={materials["Material.095"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装071"].geometry}
          material={materials["Material.094"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装072"].geometry}
          material={materials["Material.093"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装073"].geometry}
          material={materials["Material.092"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装074"].geometry}
          material={materials["Material.069"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装075"].geometry}
          material={materials["default.019"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装076"].geometry}
          material={materials["Material.018"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装077"].geometry}
          material={materials["default.020"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装078"].geometry}
          material={materials["default.021"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装079"].geometry}
          material={materials["Material.003"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装080"].geometry}
          material={materials["Material.009"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装081"].geometry}
          material={materials["default.022"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装082"].geometry}
          material={materials["default.023"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装083"].geometry}
          material={materials["Material.070"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装084"].geometry}
          material={materials["default.024"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装085"].geometry}
          material={materials["Material.011"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装086"].geometry}
          material={materials["Material.099"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装087"].geometry}
          material={materials["Material.098"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装088"].geometry}
          material={materials["default.026"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装089"].geometry}
          material={materials["Material.005"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装090"].geometry}
          material={materials["Material.008"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装091"].geometry}
          material={materials["default.027"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装092"].geometry}
          material={materials["Material.020"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装093"].geometry}
          material={materials["default.028"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装094"].geometry}
          material={materials["default.029"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装095"].geometry}
          material={materials["default.030"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装096"].geometry}
          material={materials["default.031"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装097"].geometry}
          material={materials["default.032"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装098"].geometry}
          material={materials["Material.101"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装099"].geometry}
          material={materials["default.033"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装100"].geometry}
          material={materials["default.034"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装101"].geometry}
          material={materials["Material.040"]}
          position={[-0.27, 0.45, -0.04]}
          rotation={[-Math.PI, 1.33, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装102"].geometry}
          material={materials["default.060"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装103"].geometry}
          material={materials["default.061"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装104"].geometry}
          material={materials["default.062"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装105"].geometry}
          material={materials["default.063"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装106"].geometry}
          material={materials["default.066"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装107"].geometry}
          material={materials["default.067"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装108"].geometry}
          material={materials["Material.039"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装109"].geometry}
          material={materials["default.068"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装110"].geometry}
          material={materials["default.069"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装111"].geometry}
          material={materials["default.070"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装112"].geometry}
          material={materials["default.071"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装113"].geometry}
          material={materials["default.072"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装114"].geometry}
          material={materials["default.073"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装115"].geometry}
          material={materials["default.074"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装116"].geometry}
          material={materials["default.075"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装117"].geometry}
          material={materials["default.076"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装118"].geometry}
          material={materials["default.077"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装119"].geometry}
          material={materials["default.078"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装120"].geometry}
          material={materials["default.079"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装121"].geometry}
          material={materials["default.080"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装122"].geometry}
          material={materials["default.081"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装123"].geometry}
          material={materials["default.082"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装124"].geometry}
          material={materials["default.083"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装125"].geometry}
          material={materials["default.084"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装126"].geometry}
          material={materials["Material.038"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装127"].geometry}
          material={materials["Material.035"]}
          position={[-0.27, 0.44, -0.2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装128"].geometry}
          material={materials["Material.034"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装129"].geometry}
          material={materials["Material.071"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装130"].geometry}
          material={materials["Material.021"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装131"].geometry}
          material={materials["Material.025"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装132"].geometry}
          material={materials["Material.024"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装133"].geometry}
          material={materials["Material.022"]}
          position={[-0.53, -0.43, -0.51]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装134"].geometry}
          material={materials["Material.026"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装135"].geometry}
          material={materials["Material.027"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装136"].geometry}
          material={materials["Material.023"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装137"].geometry}
          material={materials["Material.036"]}
          position={[-0.27, 0.44, 0.11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装138"].geometry}
          material={materials["Material.033"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装139"].geometry}
          material={materials["Material.037"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装140"].geometry}
          material={materials["Material.032"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装141"].geometry}
          material={materials["Material.073"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装142"].geometry}
          material={materials["default.087"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装143"].geometry}
          material={materials["default.088"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装144"].geometry}
          material={materials["Material.072"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装145"].geometry}
          material={materials["Material.081"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装146"].geometry}
          material={materials["Material.076"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装147"].geometry}
          material={materials["Material.082"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装148"].geometry}
          material={materials["Material.075"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装149"].geometry}
          material={materials["default.089"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装150"].geometry}
          material={materials["Material.084"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装151"].geometry}
          material={materials["Material.079"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装152"].geometry}
          material={materials["default.090"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装153"].geometry}
          material={materials["default.091"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装154"].geometry}
          material={materials["Material.080"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装155"].geometry}
          material={materials["default.092"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装156"].geometry}
          material={materials["default.093"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装157"].geometry}
          material={materials["default.094"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装158"].geometry}
          material={materials["default.095"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装159"].geometry}
          material={materials["default.096"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装160"].geometry}
          material={materials["default.097"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装161"].geometry}
          material={materials["Material.083"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装162"].geometry}
          material={materials["default.098"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装163"].geometry}
          material={materials["default.099"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装164"].geometry}
          material={materials["Material.077"]}
          position={[0, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.超1001.geometry}
          material={materials["Material.053"]}
          position={[0.31, -0.18, -0.43]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.超2001.geometry}
          material={materials["Material.054"]}
          position={[-0.31, -0.18, -0.43]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.超3001.geometry}
          material={materials["Material.055"]}
          position={[-0.8, -0.18, -0.32]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.超4001.geometry}
          material={materials["Material.056"]}
          position={[-0.8, -0.18, 0.22]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.超5001.geometry}
          material={materials["Material.057"]}
          position={[-0.31, -0.18, 0.33]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.超6001.geometry}
          material={materials["Material.058"]}
          position={[0.31, -0.18, 0.33]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.超7001.geometry}
          material={materials["Material.059"]}
          position={[0.8, -0.18, 0.22]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.超8001.geometry}
          material={materials["Material.060"]}
          position={[0.8, -0.18, -0.32]}
          scale={0.01}
        />
      </group>
      <group ref={arm1} position={[-0.27, 0.58, -0.05]}>
        <group ref={arm2} position={[0, -0.04, 0.14]}>
          <group ref={arm3} position={[0, 0.41, 0.1]}>
            <group ref={arm4} position={[0.37, 0, 0.11]}>
              <group ref={arm5} position={[0.11, 0, 0]}>
                <group ref={arm6} position={[0, 0, -0.07]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["00_总装013"].geometry}
                    material={materials["Material.048"]}
                    position={[1.66, 0, 12.06]}
                    rotation={[1.76, 0.16, 2.04]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["00_总装528"].geometry}
                    material={materials["Material.048"]}
                    position={[-0.07, 0, 12.06]}
                    rotation={[1.76, 0.16, 2.04]}
                  />
                </group>
                <group
                  position={[1.54, 0, 11.99]}
                  rotation={[1.76, 0.16, 2.04]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["00_总装017_1"].geometry}
                    material={materials["Material.049"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["00_总装017_2"].geometry}
                    material={materials["default.045"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["00_总装017_3"].geometry}
                    material={materials["default.046"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["00_总装017_4"].geometry}
                    material={materials["default.047"]}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["00_总装011"].geometry}
                  material={materials["Material.047"]}
                  position={[1.59, 0, 11.99]}
                  rotation={[1.76, 0.16, 2.04]}
                />
                <group
                  position={[-0.19, 0, 11.99]}
                  rotation={[1.76, 0.16, 2.04]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["00_总装522_1"].geometry}
                    material={materials["Material.049"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["00_总装522_2"].geometry}
                    material={materials["default.045"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["00_总装522_3"].geometry}
                    material={materials["default.046"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["00_总装522_4"].geometry}
                    material={materials["default.047"]}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["00_总装523"].geometry}
                  material={materials["Material.047"]}
                  position={[-0.14, 0, 11.99]}
                  rotation={[1.76, 0.16, 2.04]}
                />
              </group>
              <group position={[1.7, 0, 11.84]} rotation={[1.9, -0.78, 2.29]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["00_总装020_1"].geometry}
                  material={materials["Material.050"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["00_总装020_2"].geometry}
                  material={materials["default.053"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["00_总装020_3"].geometry}
                  material={materials["default.054"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["00_总装020_4"].geometry}
                  material={materials["default.055"]}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["00_总装015"].geometry}
                material={materials["Material.046"]}
                position={[1.7, 0, 11.88]}
                rotation={[1.9, -0.78, 2.29]}
              />
              <group position={[-0.03, 0, 11.84]} rotation={[1.9, -0.78, 2.29]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["00_总装533_1"].geometry}
                  material={materials["Material.050"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["00_总装533_2"].geometry}
                  material={materials["default.053"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["00_总装533_3"].geometry}
                  material={materials["default.054"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["00_总装533_4"].geometry}
                  material={materials["default.055"]}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["00_总装534"].geometry}
                material={materials["Material.046"]}
                position={[-0.03, 0, 11.88]}
                rotation={[1.9, -0.78, 2.29]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["00_总装006"].geometry}
              material={materials["Material.051"]}
              position={[2.18, 0, 12]}
              rotation={[1.83, -0.78, 2.29]}
            >
              <group position={[-0.01, -0.02, -0.03]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["00_总装013_1"].geometry}
                  material={materials["Material.052"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["00_总装013_2"].geometry}
                  material={materials["default.038"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["00_总装013_3"].geometry}
                  material={materials["default.039"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["00_总装013_4"].geometry}
                  material={materials["default.040"]}
                />
              </group>
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["00_总装009"].geometry}
              material={materials["Material.044"]}
              position={[2.2, 0, 11.62]}
              rotation={[3.09, -1.37, -2.69]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["00_总装511"].geometry}
              material={materials["Material.051"]}
              position={[0.45, 0, 12]}
              rotation={[1.83, -0.78, 2.29]}
            >
              <group position={[-0.01, -0.02, -0.03]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["00_总装510_1"].geometry}
                  material={materials["Material.052"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["00_总装510_2"].geometry}
                  material={materials["default.038"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["00_总装510_3"].geometry}
                  material={materials["default.039"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["00_总装510_4"].geometry}
                  material={materials["default.040"]}
                />
              </group>
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["00_总装520"].geometry}
              material={materials["Material.044"]}
              position={[0.47, 0, 11.62]}
              rotation={[3.09, -1.37, -2.69]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["00_总装005"].geometry}
            material={materials["Material.043"]}
            position={[2.3, 0.2, 11.73]}
            rotation={[Math.PI, -1.37, -2.71]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["00_总装008"].geometry}
            material={materials["Material.045"]}
            position={[2.31, 0.4, 11.73]}
            rotation={[-Math.PI, -1.37, -2.71]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["00_总装017"].geometry}
            material={materials["Material.042"]}
            position={[2.3, 0, 11.73]}
            rotation={[Math.PI, -1.45, -2.71]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["00_总装508"].geometry}
            material={materials["Material.043"]}
            position={[0.57, 0.2, 11.73]}
            rotation={[Math.PI, -1.37, -2.71]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["00_总装517"].geometry}
            material={materials["Material.045"]}
            position={[0.58, 0.4, 11.73]}
            rotation={[-Math.PI, -1.37, -2.71]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["00_总装542"].geometry}
            material={materials["Material.042"]}
            position={[0.56, 0, 11.73]}
            rotation={[Math.PI, -1.45, -2.71]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装016"].geometry}
          material={materials["Material.041"]}
          position={[2.44, 0, 11.87]}
          rotation={[Math.PI, -1.45, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["00_总装539"].geometry}
          material={materials["Material.041"]}
          position={[0.7, 0, 11.87]}
          rotation={[Math.PI, -1.45, Math.PI]}
        />
      </group>
    </group>
  );
};

export default Model;
