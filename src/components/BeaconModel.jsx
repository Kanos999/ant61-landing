/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 beacon.glb 
*/

import React from 'react'
import { useState, useRef, useLayoutEffect } from 'react';
import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'
import gsap from "gsap";

const FLOOR_HEIGHT = 8;
const NB_FLOORS = 2;

const BeaconModel = (props) => {
  const { nodes, materials } = useGLTF('./models/beacon.glb')
  const ref = useRef();
  const batteriesRef = useRef();
  const chipsRef = useRef();
  const pcbRef = useRef();
  const tl = useRef();
  const scroll = useScroll();
  const [enclosureOpacity, setEnclosureOpacity] = useState(materials['Aluminum_-_Bead_Blasted.001']);

  var textureLoader = new THREE.TextureLoader();
  var texture = textureLoader.load('./noise.jpg');

  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  
  const anodisedMaterial = new THREE.MeshStandardMaterial({
    color: 0xe67e22,

    roughness: 0.4,
    metalness: 1,

    roughnessMap: texture,
    metalnessMap: texture,

    envMap: texture, // important -- especially for metals!
    envMapIntensity: 1
  })

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
    
    setEnclosureOpacity(1 - scroll.range(0, 1/3));
  })

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // vertical animation
    tl.current.to(
      ref.current.rotation,
      {
        duration: 1.5,
        x: Math.PI / 2.8,
        y: Math.PI * 1.2,
        z: Math.PI / 5
      },
      0
    );

    tl.current.to(
      ref.current.scale,
      {
        duration: 1.5,
        x: 0.5,
        y: 0.5,
        z: 0.5
      },
      0
    );

    tl.current.to(
      ref.current.position,
      {
        duration: 1.5,
        x: -4,
        y: 0,
        z: 0
      },
      0
    );

    // Translation animation
    tl.current.to(
      batteriesRef.current.position,
      {
        duration: 1,
        y: 1,
        z: -4
      },
      0.5
    );

    tl.current.to(
      pcbRef.current.position,
      {
        duration: 1,
        y: 4
      },
      0.5
    );

    tl.current.to(
      chipsRef.current.position,
      {
        duration: 1,
        y: 8
      },
      0.5
    );
  }, []);

  // console.log(materials['Aluminum_-_Bead_Blasted.001'])

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, Math.PI, 0]} scale={[1,1,1]} ref={ref}>
        
        {/* Enclosure */}
        <group >
          <mesh opacity={enclosureOpacity} transparent geometry={nodes.beacon001.geometry} material={anodisedMaterial} />
        </group>

        {/* Batteries */}
        <group position={[0,0,0]}>
          <group ref={batteriesRef}>
            <mesh geometry={nodes.beacon001_1.geometry} material={materials['Aluminum_-_Satin.001']} />
          </group>
        </group>

        

        {/* chip (yet to identify) */}
        <group position={[0,0,0]}>
          <group ref={chipsRef}>
            <mesh geometry={nodes.beacon001_24.geometry} material={materials['Opaque(144,144,144).001']} />
            <mesh geometry={nodes.beacon001_8.geometry} material={materials['Opaque(128,128,128).001']} />
          </group>
        </group>
        

        

        {/* Chip (yet to identify) */}
        <group position={[0,0,0]}>
          <group ref={pcbRef}>
            <mesh geometry={nodes.beacon001_9.geometry} material={materials['Opaque(64,64,64).001']} />        
            <mesh geometry={nodes.beacon001_10.geometry} material={materials['Opaque(212,212,212).001']} />
            <mesh geometry={nodes.beacon001_11.geometry} material={materials['Opaque(220,160,15).001']} />
            <mesh geometry={nodes.beacon001_12.geometry} material={materials['Opaque(73,73,73).001']} />
            <mesh geometry={nodes.beacon001_13.geometry} material={materials['Opaque(245,245,245).001']} />
            <mesh geometry={nodes.beacon001_14.geometry} material={materials['Opaque(150,150,150).001']} />
            <mesh geometry={nodes.beacon001_15.geometry} material={materials['Opaque(50,50,50).001']} />
            <mesh geometry={nodes.beacon001_16.geometry} material={materials['Opaque(185,185,185).001']} />
            <mesh geometry={nodes.beacon001_17.geometry} material={materials['Opaque(191,191,191).001']} />
            <mesh geometry={nodes.beacon001_18.geometry} material={materials['Opaque(255,255,255).001']} />
            <mesh geometry={nodes.beacon001_19.geometry} material={materials['Opaque(255,74,74).001']} />
            <mesh geometry={nodes.beacon001_20.geometry} material={materials['Opaque(70,70,70).001']} />
            <mesh geometry={nodes.beacon001_21.geometry} material={materials['Opaque(102,102,102).001']} />
            <mesh geometry={nodes.beacon001_22.geometry} material={materials['Opaque(202,209,238).001']} />
            <mesh geometry={nodes.beacon001_23.geometry} material={materials['Opaque(0,64,0).001']} />
            
            {/* 104 connector */}
            <mesh geometry={nodes.beacon001_2.geometry} material={materials['Opaque(176,176,176).001']} />
            
            <mesh geometry={nodes.beacon001_3.geometry} material={materials['Opaque(255,255,0).001']} />
            <mesh geometry={nodes.beacon001_4.geometry} material={materials['Opaque(0,128,0).001']} />
            <mesh geometry={nodes.beacon001_5.geometry} material={materials['Opaque(77,77,77).001']} />
            <mesh geometry={nodes.beacon001_6.geometry} material={materials['Opaque(187,197,203).001']} />
            <mesh geometry={nodes.beacon001_7.geometry} material={materials['Steel_-_Satin.001']} />
            <mesh geometry={nodes.beacon001_25.geometry} material={materials['Opaque(255,55,55).001']} />
            <mesh geometry={nodes.beacon001_26.geometry} material={materials['Opaque(192,192,192).001']} />
            <mesh geometry={nodes.beacon001_27.geometry} material={materials['Opaque(207,201,181).001']} />
            <mesh geometry={nodes.beacon001_28.geometry} material={materials['Opaque(211,211,211).001']} />
            <mesh geometry={nodes.beacon001_29.geometry} material={materials['Opaque(204,204,204).001']} />
            <mesh geometry={nodes.beacon001_30.geometry} material={materials['Opaque(41,41,41).001']} />
            <mesh geometry={nodes.beacon001_31.geometry} material={materials['Opaque(130,192,255).001']} />
            <mesh geometry={nodes.beacon001_32.geometry} material={materials['Opaque(0,128,192).001']} />
            <mesh geometry={nodes.beacon001_33.geometry} material={materials['Opaque(51,51,51).001']} />
            <mesh geometry={nodes.beacon001_34.geometry} material={materials['Opaque(129,136,140).001']} />
            <mesh geometry={nodes.beacon001_35.geometry} material={materials['Opaque(133,237,168).001']} />
            <mesh geometry={nodes.beacon001_36.geometry} material={materials['Opaque(168,168,168).001']} />
            <mesh geometry={nodes.beacon001_37.geometry} material={materials['Opaque(255,206,117).001']} />
            <mesh geometry={nodes.beacon001_38.geometry} material={materials['Opaque(66,66,66).001']} />
            <mesh geometry={nodes.beacon001_39.geometry} material={materials['Opaque(236,236,236).001']} />
            <mesh geometry={nodes.beacon001_40.geometry} material={materials['Opaque(242,236,155).001']} />
            <mesh geometry={nodes.beacon001_41.geometry} material={materials['Opaque(134,134,134).001']} />
            <mesh geometry={nodes.beacon001_42.geometry} material={materials['Opaque(253,252,238).001']} />
            <mesh geometry={nodes.beacon001_43.geometry} material={materials['Opaque(127,127,127).001']} />
            <mesh geometry={nodes.beacon001_44.geometry} material={materials['Opaque(255,0,0).001']} />
            <mesh geometry={nodes.beacon001_45.geometry} material={materials['Opaque(175,175,175).001']} />
            <mesh geometry={nodes.beacon001_46.geometry} material={materials['Opaque(10,255,0).001']} />
            <mesh geometry={nodes.beacon001_47.geometry} material={materials['Opaque(212,211,212).001']} />
            <mesh geometry={nodes.beacon001_48.geometry} material={materials['Opaque(255,155,55).001']} />
            <mesh geometry={nodes.beacon001_49.geometry} material={materials['Opaque(0,255,0).001']} />
            <mesh geometry={nodes.beacon001_50.geometry} material={materials['Opaque(92,92,92).001']} />
            <mesh geometry={nodes.beacon001_51.geometry} material={materials['Opaque(254,254,254).001']} />
            <mesh geometry={nodes.beacon001_52.geometry} material={materials['Opaque(168,146,77).001']} />
            <mesh geometry={nodes.beacon001_53.geometry} material={materials['Opaque(117,117,117).001']} />
            <mesh geometry={nodes.beacon001_54.geometry} material={materials['Opaque(160,80,0).001']} />
            <mesh geometry={nodes.beacon001_55.geometry} material={materials['Opaque(142,107,55).001']} />
            <mesh geometry={nodes.beacon001_56.geometry} material={materials['Opaque(120,100,75).001']} />
            <mesh geometry={nodes.beacon001_57.geometry} material={materials['Opaque(106,90,64).001']} />
            <mesh geometry={nodes.beacon001_58.geometry} material={materials['Opaque(110,84,5).001']} />
          </group>
        </group>
        
        
        
      </group>
    </group>
  )
}


useGLTF.preload('./models/beacon.glb');

export { BeaconModel };