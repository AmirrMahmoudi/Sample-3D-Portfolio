import { FcAbout, FcHome } from "react-icons/fc";
import { useState, Suspense } from "react";
import {
  OrbitControls,
  Preload,
  useGLTF,
  Html,
  OrthographicCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import aboutmodel from "../../assets/models/of_planes_and_satellites.glb";
import * as THREE from "three";
const Aboutmod = () => {
  const models = useGLTF(aboutmodel);
  return (
    <group>
      <primitive
        object={models.scene}
        scale={[1200, 1200, 1200]}
        position-y={-3}
        rotation-y={1.2}
        position-x={-35}
      ></primitive>
    </group>
  );
};

// export default CityEnviroment;
export const AboutModels = () => {
  const [isDragging, setIsDragging] = useState(false);
  // Vextor3 [x,y,z][12]

  const floorType = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

  return (
    <div className="h-144 w-full cursor-grabbing">
      <Canvas dpr={[0, 2]} camera={{ position: [-3, 0.5, 30] }}>
        <Suspense>
          <OrthographicCamera
            makeDefault
            zoom={3.5}
            position={[600, -60, 500]}
          />
          <OrbitControls minZoom={1} maxZoom={5} enabled={!isDragging} />
          <Aboutmod setIsDragging={setIsDragging} floorType={floorType} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};
