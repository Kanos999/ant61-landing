import { BeaconModel } from './BeaconModel'
import { ContactShadows, Environment } from '@react-three/drei'
import { useLayoutEffect, useRef } from 'react'

export const Experience = ({ scrollProgressRef }) => {
  const beaconPosition = [0, 1.1, -6]
  const engravingTargetPosition = [beaconPosition[0], beaconPosition[1] + 1.15, beaconPosition[2] + 0.25]

  const keyLightRef = useRef(null)
  const keyTargetRef = useRef(null)
  const rimLightRef = useRef(null)
  const rimTargetRef = useRef(null)
  const engravingLightRef = useRef(null)
  const engravingTargetRef = useRef(null)

  useLayoutEffect(() => {
    if (keyLightRef.current && keyTargetRef.current) {
      keyLightRef.current.target = keyTargetRef.current
      keyTargetRef.current.updateMatrixWorld()
      keyLightRef.current.target.updateMatrixWorld()
    }

    if (rimLightRef.current && rimTargetRef.current) {
      rimLightRef.current.target = rimTargetRef.current
      rimTargetRef.current.updateMatrixWorld()
      rimLightRef.current.target.updateMatrixWorld()
    }

    if (engravingLightRef.current && engravingTargetRef.current) {
      engravingLightRef.current.target = engravingTargetRef.current
      engravingTargetRef.current.updateMatrixWorld()
      engravingLightRef.current.target.updateMatrixWorld()
    }
  }, [])

  return (
    <>
      <color attach="background" args={['#000000']} />

      {/* Cinematic, directional product lighting: strong left key, minimal fill */}
      <ambientLight intensity={0.006} />

      {/* Soft base illumination so the whole model is readable */}
      <hemisphereLight intensity={0.008} color="#F8FAFC" groundColor="#050507" />

      {/* Targets (Three lights aim at origin by default) */}
      <object3D ref={keyTargetRef} position={beaconPosition} />
      <object3D ref={rimTargetRef} position={beaconPosition} />
      <object3D ref={engravingTargetRef} position={engravingTargetPosition} />

      {/* Key (screen-left): tight, high-contrast */}
      <spotLight
        ref={keyLightRef}
        position={[-14, 7, 5]}
        intensity={4.0}
        color="#F8FAFC"
        angle={0.19}
        penumbra={0.75}
        decay={2}
        distance={42}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.00015}
      />

      {/* Tiny fill: keeps surfaces from going fully black */}
      <directionalLight position={[-3, 8, 6]} intensity={0.006} color="#F1F5F9" />

      {/* Rim: edge glints without lifting the shadow side */}
      <directionalLight
        ref={rimLightRef}
        position={[14, 6, -16]}
        intensity={0.38}
        color="#FFE6C9"
      />

      {/* Engraving highlight: behind-camera spotlight aimed at the engraving plate */}
      <spotLight
        ref={engravingLightRef}
        position={[8.5, 3.2, 8.0]}
        intensity={0.02}
        color="#FFE6C9"
        angle={0.024}
        penumbra={0.9}
        decay={2}
        distance={12}
      />

      {/* Reflections: low intensity so only edges catch */}
      <Environment preset="studio" environmentIntensity={0.03} />

      <BeaconModel
        scrollProgressRef={scrollProgressRef}
        position={beaconPosition}
        scale={[0.42, 0.42, 0.42]}
        baseScale={3.4}
      />

      {/* Subtle grounding shadow under the product */}
      <ContactShadows position={[0, -3.6, -6]} opacity={0.35} scale={12} blur={2.6} far={12} />
    </>
  )
}