import {
  OrbitControls,
  Html,
  Preload,
  useGLTF,
  OrthographicCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import php from "../../assets/models/php_elephant_in_3d.glb";
import * as THREE from "three";
import { Suspense, useState } from "react";
const SkillsModel = () => {
  const phpicon = useGLTF(php);
  return (
    <>
      <group>
        <primitive
          object={phpicon.scene}
          scale={[7, 7, 7, 7]}
          position-y={-3}
          position-x={-35}
          rotation-y={1.2}
        ></primitive>
      </group>
    </>
  );
};

export const Php = () => {
  const [isDragging, setIsDragging] = useState(false);
  const floorType = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  return (
    <div className="h-40 cursor-grabbing">
      <Canvas camera={{ position: [4, 0, 1, 1, 2] }} shadows dpr={[1, 2]}>
        <directionalLight intensity={(0, 7)} castShadow />
        <ambientLight intensity={-0.5} />
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
          <OrthographicCamera makeDefault zoom={5} position={[800, 70, 400]} />
          <OrbitControls minZoom={1} maxZoom={5} enabled={!isDragging} />
          <SkillsModel setIsDragging={setIsDragging} floorType={floorType} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};
