import {
  OrbitControls,
  Html,
  Preload,
  useGLTF,
  OrthographicCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Clang from "../../assets/models/c.glb";
import * as THREE from "three";
import { Suspense, useState } from "react";
const SkillsModel = () => {
  const Cicon = useGLTF(Clang);
  return (
    <>
      <group>
        <primitive
          object={Cicon.scene}
          scale={[1, 1, 1, 1]}
          position-y={-3}
          position-x={-35}
          rotation-y={1.2}
        ></primitive>
      </group>
    </>
  );
};

export const CLang = () => {
  const [isDragging, setIsDragging] = useState(false);
  const floorType = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  return (
    <div className="h-40 cursor-grabbing">
      <Canvas camera={{ position: [4, 0, 1, 1, 2] }} shadows dpr={[1, 2]}>
        <directionalLight intensity={(0, 7)} castShadow />
        <ambientLight intensity={-.5} />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0, 1, 0]}>
          <meshPhongMaterial
            attach="material"
            color={"#000"}
            side={THREE.DoubleSide}
          />
        </mesh>
        {/* <planeHelper args={[floorType, 5, "red"]} />
        <gridHelper args={[100, 100]} /> */}
        <Suspense>
          <OrthographicCamera makeDefault zoom={2} position={[600, 60, 500]} />
          <OrbitControls minZoom={1} maxZoom={5} enabled={!isDragging} />
          <SkillsModel setIsDragging={setIsDragging} floorType={floorType} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};
