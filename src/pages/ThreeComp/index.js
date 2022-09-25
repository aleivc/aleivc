import { useRef, Suspense } from "react";
import {
  GizmoHelper,
  GizmoViewcube,
  useGLTF,
  OrbitControls,
  useProgress,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const ThreeComp = () => {
  const ref = useRef();
  const controlsRef = useRef();
  const { nodes, materials } = useGLTF("/models/shoe-draco.glb");
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
          <Suspense fallback={null}>
            <group ref={ref} dispose={null}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.shoe.geometry}
                material={materials.laces}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.shoe_1.geometry}
                material={materials.mesh}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.shoe_2.geometry}
                material={materials.caps}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.shoe_3.geometry}
                material={materials.inner}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.shoe_4.geometry}
                material={materials.sole}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.shoe_5.geometry}
                material={materials.stripes}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.shoe_6.geometry}
                material={materials.band}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.shoe_7.geometry}
                material={materials.patch}
              />
            </group>
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
