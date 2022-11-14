import { Suspense, useEffect, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import SoldierModel from "./SoldierModel";
import { TextureLoader } from "three";

const W = "w";
const A = "a";
const S = "s";
const D = "d";
const SHIFT = "shift";
const DIRECTIONS = [W, A, S, D];

class KeyDisplay {
  map = new Map();
  constructor() {
    const w = document.createElement("div");
    const a = document.createElement("div");
    const s = document.createElement("div");
    const d = document.createElement("div");
    const shift = document.createElement("div");

    this.map.set(W, w);
    this.map.set(A, a);
    this.map.set(S, s);
    this.map.set(D, d);
    this.map.set(SHIFT, shift);

    this.map.forEach((v, k) => {
      v.style.color = "blue";
      v.style.fontsize = "50px";
      v.style.fontweight = "800";
      v.style.position = "absolute";
      v.textContent = k;
    });

    this.updatePosition();

    // todo character control
    // this.map.forEach((v, _) => {
    // document.body.append(v);
    // });
  }

  updatePosition() {
    this.map.get(W).style.top = `${window.innerHeight - 150}px`;
    this.map.get(A).style.top = `${window.innerHeight - 100}px`;
    this.map.get(S).style.top = `${window.innerHeight - 100}px`;
    this.map.get(D).style.top = `${window.innerHeight - 100}px`;
    this.map.get(SHIFT).style.top = `${window.innerHeight - 100}px`;

    this.map.get(W).style.left = `${300}px`;
    this.map.get(A).style.left = `${200}px`;
    this.map.get(S).style.left = `${300}px`;
    this.map.get(D).style.left = `${400}px`;
    this.map.get(SHIFT).style.left = `${500}px`;
  }

  down(key) {
    if (this.map.get(key.toLowerCase())) {
      this.map.get(key.toLowerCase()).style.color = "red";
    }
  }

  up(key) {
    if (this.map.get(key.toLowerCase())) {
      this.map.get(key.toLowerCase()).style.color = "blue";
    }
  }
}

const Soldier = () => {
  const controlsRef = useRef();
  const colorMap = useLoader(
    TextureLoader,
    "/textures/sand/Sand 002_COLOR.jpg"
  );

  const keysPressed = {};
  const keyDisplayQueue = new KeyDisplay();

  // useEffect(() => {
  //   document.addEventListener(
  //     "keydown",
  //     (e) => {
  //       keyDisplayQueue.down(e.key);
  //       keysPressed[e.key.toLowerCase()] = true;
  //     },
  //     false
  //   );
  //   document.addEventListener(
  //     "keyup",
  //     (e) => {
  //       keyDisplayQueue.up(e.key);
  //       keysPressed[e.key.toLowerCase()] = false;
  //     },
  //     false
  //   );
  // }, []);

  return (
    <div className="h-screen bg-gray-400 dark:bg-gray-900">
      <Canvas camera={{ position: [0, 0, 2.75] }}>
        <Suspense fallback={<Html center>loading...</Html>}>
          <SoldierModel />
        </Suspense>
        <ambientLight color={0xffffff} intensity={0.7} />
        <directionalLight color={0xffffff} position={[-60, 100, -10]} />
        {/*<mesh rotation-x={-Math.PI / 2}>*/}
        {/*  <planeGeometry args={[512, 512, 80, 80]} />*/}
        {/*  <meshStandardMaterial map={colorMap} />*/}
        {/*</mesh>*/}
        <OrbitControls ref={controlsRef} enableDamping={false} />
      </Canvas>
    </div>
  );
};

export default Soldier;
