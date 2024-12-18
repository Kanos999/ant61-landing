/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 beacon.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/beacon.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes['Beacon-model_1'].geometry} material={materials['Aluminum_-_Bead_Blasted']} />
        <mesh geometry={nodes['Beacon-model_2'].geometry} material={materials['Aluminum_-_Satin']} />
        <mesh geometry={nodes['Beacon-model_3'].geometry} material={materials['Opaque(176,176,176)']} />
        <mesh geometry={nodes['Beacon-model_4'].geometry} material={materials['Opaque(255,255,0)']} />
        <mesh geometry={nodes['Beacon-model_5'].geometry} material={materials['Opaque(0,128,0)']} />
        <mesh geometry={nodes['Beacon-model_6'].geometry} material={materials['Opaque(128,128,128)']} />
        <mesh geometry={nodes['Beacon-model_7'].geometry} material={materials['Opaque(133,237,168)']} />
        <mesh geometry={nodes['Beacon-model_8'].geometry} material={materials['Opaque(168,168,168)']} />
        <mesh geometry={nodes['Beacon-model_9'].geometry} material={materials['Opaque(255,206,117)']} />
        <mesh geometry={nodes['Beacon-model_10'].geometry} material={materials['Opaque(66,66,66)']} />
        <mesh geometry={nodes['Beacon-model_11'].geometry} material={materials['Opaque(255,255,255)']} />
        <mesh geometry={nodes['Beacon-model_12'].geometry} material={materials['Steel_-_Satin']} />
        <mesh geometry={nodes['Beacon-model_13'].geometry} material={materials['Opaque(236,236,236)']} />
        <mesh geometry={nodes['Beacon-model_14'].geometry} material={materials['Opaque(73,73,73)']} />
        <mesh geometry={nodes['Beacon-model_15'].geometry} material={materials['Opaque(212,212,212)']} />
        <mesh geometry={nodes['Beacon-model_16'].geometry} material={materials['Opaque(220,160,15)']} />
        <mesh geometry={nodes['Beacon-model_17'].geometry} material={materials['Opaque(191,191,191)']} />
        <mesh geometry={nodes['Beacon-model_18'].geometry} material={materials['Opaque(144,144,144)']} />
        <mesh geometry={nodes['Beacon-model_19'].geometry} material={materials['Opaque(202,209,238)']} />
        <mesh geometry={nodes['Beacon-model_20'].geometry} material={materials['Opaque(127,127,127)']} />
        <mesh geometry={nodes['Beacon-model_21'].geometry} material={materials['Opaque(255,0,0)']} />
        <mesh geometry={nodes['Beacon-model_22'].geometry} material={materials['Opaque(175,175,175)']} />
      </group>
    </group>
  )
}

useGLTF.preload('/beacon.glb')
