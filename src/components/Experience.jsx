import { useState, useRef, useLayoutEffect } from 'react';
import { BoxGeometry, MeshNormalMaterial } from 'three';


import { OrbitControls, ScrollControls, Html } from '@react-three/drei';


import { BeaconModel } from './BeaconModel'
import { Overlay } from './Overlay';


export const Experience = () => {
  return (
    <>
     <pointLight
        position={[2,4,2]}
        angle={0.9}
        penumbra={1}
        intensity={20}
      />
      <pointLight intensity={10} position={[-4, -1, -3]} />
      <ambientLight intensity={0.4} />
      <ScrollControls pages={2} damping={0.2}>
        {/* <Beacon scale={[0.4,0.4,0.4]} /> */}
        <Overlay />
        <BeaconModel scale={[0.4,0.4,0.4]} />
        
      </ScrollControls>
    </>
  );
}