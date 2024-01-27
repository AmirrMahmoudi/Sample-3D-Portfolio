import React from "react";
import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

import { useControls } from "leva";
const Polyhedron = (props) => {
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.x += 0.2 * delta;
    ref.current.rotation.y += 0.2 * delta;
  });
  useControls(props.name, {
    wireframe: {
      value: false,
      onChange: (v) => {
        ref.current.material.wireframe = v;
      },
    },

    flatShading: {
      value: true,
      onChange: (v) => {
        ref.current.material.flatShading = v;
        ref.current.material.needsUpdate = true;
      },
    },
    color: {
      value: "lime",
      onChange: (v) => {
        ref.current.material.collor = new THREE.Color(v);
      },
    },
  });

  return <mesh {...props} ref={ref}>
    <icosahedronGeometry age={[1,1]}/>
  </mesh>;
};

export default Polyhedron;
