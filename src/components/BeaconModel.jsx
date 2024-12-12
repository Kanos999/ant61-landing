import React from 'react'
import { useState, useRef, useLayoutEffect } from 'react';
import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'
import gsap from "gsap";

const FLOOR_HEIGHT = 8;
const NB_FLOORS = 2;

const BeaconModel = (props) => {
  const { nodes, materials } = useGLTF('./models/beacon-bare.glb')
  const ref = useRef();
  const tl = useRef();
  const scroll = useScroll();

  var textureLoader = new THREE.TextureLoader();
  var texture = textureLoader.load('./noise.jpg');

  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  
  const anodisedMaterial = new THREE.MeshStandardMaterial({
    color: 0xff9a42,//0xec984e, 
    roughness: 0.4,
    metalness: 0.8,
    roughnessMap: texture,
    metalnessMap: texture,
    envMap: texture, // important -- especially for metals!
    envMapIntensity: 10
  })

  const insulatorMaterial = new THREE.MeshStandardMaterial({
    color: 0x666666,
    roughness: 0.6,
    metalness: 0.1,
    roughnessMap: texture,
    metalnessMap: texture,
    envMap: texture, // important -- especially for metals!
    envMapIntensity: 1
  })

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
    // console.log(ref.current.children)
    ref.current.children.forEach((child) => {
      if (child.isMesh && child.material) {
        child.material.transparent = true; // Ensure transparency is enabled
        child.material.opacity = scroll.offset < 0.1 ? 0 : 1;
      }
    });
  })

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(
      ref.current.rotation,
      {
        duration: 7,
        x: 0,
        y: -1.5*Math.PI, // 2.5*Math.PI
        z: 0,
        ease: "power1.inOut",
      },
      2
    );
    tl.current.to(ref.current.rotation, { duration: 1 }, 9);

  }, []);

  // console.log(materials['Aluminum_-_Bead_Blasted.001'])

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, Math.PI, 0]} scale={[1,1,1]} ref={ref}>
        <mesh position={[0,2.42,3.1]}>
          <boxGeometry args={[5.4, 0.1, 0.86]} />
          <meshStandardMaterial 
            color={'#e67e22'}
            roughness={0.4}
            metalness={0.8}
            roughnessMap={texture}
            metalnessMap={texture}
            envMap={texture}
            envMapIntensity={1} />
        </mesh>
        <mesh position={[-4.45,0.86,0]}>
          <boxGeometry args={[0.1, 0.86, 5.4]} />
          <meshBasicMaterial 
            color={'#ffffff'} />
        </mesh>
        <mesh geometry={nodes.Beacon_bare002.geometry} material={anodisedMaterial} />
        <mesh geometry={nodes.Beacon_bare002_2.geometry} material={insulatorMaterial} />
        <mesh geometry={nodes.Beacon_bare002_6.geometry} material={materials['Opaque(133,237,168).002']} />
        <mesh geometry={nodes.Beacon_bare002_7.geometry} material={materials['Opaque(168,168,168).002']} />
        <mesh geometry={nodes.Beacon_bare002_8.geometry} material={materials['Opaque(255,206,117).002']} />
        <mesh geometry={nodes.Beacon_bare002_9.geometry} material={materials['Opaque(66,66,66).002']} />
        <mesh geometry={nodes.Beacon_bare002_10.geometry} material={materials['Opaque(255,255,255).002']} />
      </group>
    </group>
  )
}


useGLTF.preload('./models/beacon-bare.glb');

export { BeaconModel };