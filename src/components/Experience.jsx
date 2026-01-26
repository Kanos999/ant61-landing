import { Environment } from '@react-three/drei'
import { GlobeConstellation } from './GlobeConstellation'

export const Experience = ({ scrollProgressRef }) => {
  return (
    <>
      <color attach="background" args={['#000000']} />

      <ambientLight intensity={0.08} />
      <directionalLight position={[-8, 6, 10]} intensity={1.4} color="#F8FAFC" />
      <directionalLight position={[10, -2, -10]} intensity={0.35} color="#F8FAFC" />

      {/* Reflections: low intensity so only edges catch */}
      <Environment preset="studio" environmentIntensity={0.02} />

      <GlobeConstellation scrollProgressRef={scrollProgressRef} satelliteCount={80} />
    </>
  )
}