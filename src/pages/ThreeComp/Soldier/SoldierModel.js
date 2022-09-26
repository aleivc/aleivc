import { useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

const SoldierModel = () => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/SoldierModel.glb");
  const { actions } = useAnimations(animations, group);

  console.log(actions);

  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <group name="Character" rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="vanguard_Mesh"
            geometry={nodes.vanguard_Mesh.geometry}
            material={materials.VanguardBodyMat}
            skeleton={nodes.vanguard_Mesh.skeleton}
          />
          <skinnedMesh
            name="vanguard_visor"
            geometry={nodes.vanguard_visor.geometry}
            material={materials.Vanguard_VisorMat}
            skeleton={nodes.vanguard_visor.skeleton}
          />
        </group>
      </group>
    </group>
  );
};

export default SoldierModel;
