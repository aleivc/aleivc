import { useRef, Suspense } from "react";
import {
  GizmoHelper,
  GizmoViewcube,
  Html,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Soldier = () => {
  return (
    <div>
      <Canvas camera={{ position: [5, 5, 0] }}>
        <Suspense fallback={<Html center>loading</Html>}>
          <Soldier />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Soldier;
