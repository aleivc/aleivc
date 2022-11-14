import { useRef, Suspense } from "react";
import {
  GizmoHelper,
  GizmoViewcube,
  Html,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Robot = () => {
  const controlsRef = useRef();
  return (
    <div className="h-screen bg-gray-400 dark:bg-gray-900">
      <Canvas camera={{ position: [10, 10, 10] }}>
        <Suspense fallback={<Html center>loading...</Html>}>
          {/* model */}
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
        <gridHelper />
        <OrbitControls ref={controlsRef} enableDamping={false} />
      </Canvas>
    </div>
  );
};

export default Robot;
