import { BeaconModel } from './BeaconModel'
import { ContactShadows, Environment } from '@react-three/drei'
import { useLayoutEffect, useRef } from 'react'

export const Experience = ({ scrollProgressRef }) => {
  const beaconPosition = [0, -1.1, -6]

  const keyLightRef = useRef(null)
  const keyTargetRef = useRef(null)
  const rimLightRef = useRef(null)
  const rimTargetRef = useRef(null)

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
  }, [])

  return (
    <>
      <color attach="background" args={['#000000']} />

      {/* Cinematic, directional product lighting: strong left key, minimal fill */}
      <ambientLight intensity={0.02} />

      {/* Targets (Three lights aim at origin by default) */}
      <object3D ref={keyTargetRef} position={beaconPosition} />
      <object3D ref={rimTargetRef} position={beaconPosition} />

      {/* Key (screen-left), tight-ish cone to keep contrast */}
      <spotLight
        ref={keyLightRef}
        position={[-8, 5, 10]}
        intensity={20}
        color="#FFE6C9"
        angle={0.34}
        penumbra={0.35}
        decay={2}
        distance={120}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.00015}
      />

      {/* Subtle neutral fill from above-left to avoid "crushed" blacks */}
      <directionalLight position={[-2, 9, 7]} intensity={0.3} color="#F1F5F9" />

      {/* Very subtle rim to separate edges without lifting shadows */}
      <directionalLight ref={rimLightRef} position={[10, 6, -18]} intensity={0.64} color="#FFE6C9" />

      {/* Keep reflections subdued so the dark side stays dark */}
      <Environment preset="studio" />

      <BeaconModel
        scrollProgressRef={scrollProgressRef}
        position={beaconPosition}
        scale={[0.42, 0.42, 0.42]}
        baseScale={3.4}
      />

      {/* Subtle grounding shadow under the product */}
      <ContactShadows position={[0, -3.6, -6]} opacity={0.75} scale={12} blur={2.4} far={12} />
    </>
  )
}