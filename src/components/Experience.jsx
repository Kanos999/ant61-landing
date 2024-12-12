import { useState, useRef, useLayoutEffect } from 'react';
import { BoxGeometry, MeshNormalMaterial } from 'three';


import { OrbitControls, ScrollControls, Html } from '@react-three/drei';


import { BeaconModel } from './BeaconModel'
import { Overlay } from './Overlay';


export const Experience = ({ setWireframeOpacity }) => {
  return (
    <>
     <pointLight
        position={[2,4,2]}
        intensity={20}
      />
      <pointLight intensity={10} position={[-4, -4, 4]} />
      <pointLight intensity={4} position={[0, -5, 6]} />
      <ambientLight intensity={0.1} />
      <ScrollControls pages={10} damping={0.2}>
        {/* <Beacon scale={[0.4,0.4,0.4]} /> */}
        <Overlay setWireframeOpacity={setWireframeOpacity} />
        <BeaconModel scale={[0.4,0.4,0.4]} />
        
      </ScrollControls>
    </>
  );
}