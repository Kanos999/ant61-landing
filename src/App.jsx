import './App.css'
import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'
import { Overlay } from './components/Overlay'
import { useScrollProgress } from './hooks/useScrollProgress'
import { SatelliteOutlineCanvas } from './components/SatelliteOutlineCanvas'
import { IsometricAccentBox } from './components/IsometricAccentBox'
import { Header } from './components/Header'
import { Button } from './components/Button'

const App = () => {
  const scrollProgressRef = useScrollProgress();

  return (
    <div className="App bg-black h-full w-full absolute overflow-x-hidden">
      <Header />
      <Canvas
        className="fixed inset-0 h-full w-full top-0 left-0 bottom-0 right-0 animate-slideup-fadein animate-delay-600"
        shadows
        dpr={[1, 2]}
        gl={{ antialias: true }}
        camera={{ position: [0, -1, 12], fov: 60 }}
      >
        <Experience scrollProgressRef={scrollProgressRef} />
      </Canvas>

      <div className="absolute top-0 h-[100vh] w-full flex items-center justify-center content-center bg-gradient-to-b from-transparent via-transparent via-20% to-black">
        <div className="text-center max-w-4xl px-6 pt-20 space-y-12">
          <h1 className="font-roboto-condensed hero-text-shadow text-white font-semibold text-6xl animate-slideup-fadein leading-tight">KEEPING SATELLITES ALIVE & ALWAYS WITHIN REACH</h1>
          <Button className="z-80 animate-slideup-fadein animate-delay-300" onClick={() => window.location.href = '#beacon'}>
            LEARN MORE
          </Button>
        </div>
      </div>

      <div className="relative z-10 h-screen w-screen">
        <Overlay scrollProgressRef={scrollProgressRef} />
      </div>
    </div>
  )
}

export default App
