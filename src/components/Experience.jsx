import { useState, useRef, useLayoutEffect } from 'react';
import { BoxGeometry, MeshNormalMaterial } from 'three';


import { OrbitControls, ScrollControls } from '@react-three/drei';


import { BeaconModel } from './BeaconModel'


export const Experience = () => {
  return (
    <>
      <spotLight
        position={[3,3,3]}
        angle={0.9}
        penumbra={1}
        intensity={30}
      />
      <spotLight
        position={[-4, -4, -4]}
        angle={0.8}
        penumbra={2}
        intensity={10}
      />
      {/* <pointLight intensity={5} position={[2, 1, 3]} /> */}
      <ambientLight intensity={0.15} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={2} damping={0.25}>
        {/* <Beacon scale={[0.4,0.4,0.4]} /> */}
        <BeaconModel scale={[0.4,0.4,0.4]} />
      </ScrollControls>
    </>
  );
}