import { useRef, Suspense } from "react";
import {
  GizmoHelper,
  GizmoViewcube,
  Html,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Shoe from "./Shoe";

const ThreeComp = () => {
  const controlsRef = useRef();
  return (
    <div className="flex">
      <ul className="w-64 h-screen pt-6 space-y-2 bg-gray-200 dark:bg-gray-800">
        <li className="mx-2 p-2 rounded border border-dashed border-gray-500 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700">
          <p className="text-gray-600 dark:text-gray-500">鞋子</p>
          <p className="text-gray-500 dark:text-gray-600">
            旋转，拖动，改变颜色
          </p>
        </li>

        <li className="mx-2 p-2 rounded border border-dashed border-gray-500 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700">
          <p className="text-gray-600 dark:text-gray-500">人物模型</p>
          <p className="text-gray-500 dark:text-gray-600">
            前进(W), 后退(S), 左(A), 右(D)
          </p>
        </li>
      </ul>
      <div className="flex-grow">
        <Canvas camera={{ position: [0, 0, 2.75] }}>
          <Suspense fallback={<Html center>loading...</Html>}>
            <Shoe />
          </Suspense>
          <ambientLight intensity={0.1} />
          <pointLight color="white" intensity={1} position={[10, 10, 10]} />
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
    </div>
  );
};

export default ThreeComp;
