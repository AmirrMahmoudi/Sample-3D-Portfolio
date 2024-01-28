import { FcAbout, FcHome } from "react-icons/fc";
import { useState, Suspense } from "react";
import {
  OrbitControls,
  Preload,
  useGLTF,
  Html,
  OrthographicCamera,
  Loader,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import cityModel from "../../assets/models/lowpoly_city_in_the_night.glb";
import * as THREE from "three";
const CityEnviroment = () => {
  const models = useGLTF(cityModel);
  return (
    <group>
      <primitive
        object={models.scene}
        scale={[-6, -8, -6]}
        position-y={-50}
        rotation-y={33}
        rotation-x={3.3}
        rotation-z={-6}
        position-z={-120}
        position-x={40}
      >
        <Html position={[70, 5, 3]} className="w-96" dir="rtl">
          <h1 className="text-3xl font-extrabold text-white">
            به محیط کاری من خوش آمدید
          </h1>
        </Html>
        <Html position={[10, 10, 8]}>
          <a href="/home">
            <FcHome className="text-center text-3xl transition delay-75 hover:text-5xl" />
          </a>
        </Html>
        <Html position={[3, -1, -13]}>
          <a href="about">
            <FcAbout />
          </a>
        </Html>
      </primitive>
    </group>
  );
};

// export default CityEnviroment;
export const MyWorkSpace = () => {
  const [isDragging, setIsDragging] = useState(false);
  // Vextor3 [x,y,z][12]

  const floorType = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

  return (
    <div className="h-screen w-full cursor-grabbing bg-gradient-to-r from-blue-950 via-blue-700 to-blue-300">
      <Canvas dpr={[0, 2]} camera={{ position: [-3, 0.5, 30] }}>
        <Suspense >
          <OrthographicCamera makeDefault zoom={3} position={[2, -100, 900]} />
          <OrbitControls minZoom={1} maxZoom={5} enabled={!isDragging} />
          <CityEnviroment setIsDragging={setIsDragging} floorType={floorType} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};
