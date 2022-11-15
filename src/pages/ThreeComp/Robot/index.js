import { useRef, Suspense, useState } from "react";
import {
  GizmoHelper,
  GizmoViewcube,
  Html,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";

const Robot = () => {
  const controlsRef = useRef();
  const [mode, setMode] = useState(true);
  return (
    <div
      style={{ position: "relative" }}
      className="h-screen bg-gray-400 dark:bg-gray-900"
    >
      <div style={{ position: "absolute", zIndex: 10, padding: 30 }}>
        <button
          className="text-white outline"
          onClick={() => {
            console.log("some");
            setMode(!mode);
          }}
        >
          {mode ? "全局视角" : "第二节手臂视角"}
        </button>
      </div>
      <Canvas>
        <Suspense fallback={<Html center>loading...</Html>}>
          <Model mode={mode} />
        </Suspense>
        <ambientLight intensity={0.1} />
        <pointLight color="white" intensity={1} position={[11, 10, 10]} />
        <pointLight color="white" intensity={1} position={[-10, 10, -10]} />
        <GizmoHelper
          alignment="bottom-right"
          margin={[80, 80]}
          onTarget={() => controlsRef?.current?.target}
          onUpdate={() => controlsRef.current?.update()}
        >
          <GizmoViewcube faces={["右", "左", "上", "下", "前", "后"]} />
        </GizmoHelper>
        <OrbitControls ref={controlsRef} enableDamping={false} />
      </Canvas>
    </div>
  );
};

export default Robot;
