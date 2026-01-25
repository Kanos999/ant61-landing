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
    <div className="App bg-black h-full w-full absolute">
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

      <div className="absolute top-0 h-[100vh] w-full flex items-center justify-center content-center font-roboto-condensed bg-gradient-to-b from-transparent via-transparent via-20% to-black">
        <div className="text-center max-w-2xl px-6 pt-20 space-y-12">
          <h1 className="font-roboto text-white font-bold text-6xl animate-slideup-fadein">KEEPING SATELLITES ALIVE, CONNECTED</h1>
          <Button className="z-80 animate-slideup-fadein animate-delay-300" onClick={() => window.location.href = '#beacon'}>
            LEARN MORE
          </Button>
        </div>
      </div>

      <div className="relative z-10 h-screen w-screen">
        
        <IsometricAccentBox
          className="pointer-events-none absolute left-1/2 top-1/2 h-[180px] w-[220px] -translate-x-1/2 -translate-y-[420px]"
          stroke="rgba(255,154,66,0.95)"
          fill="rgba(255,154,66,0.20)"
          lineWidth={2}
        />
        <SatelliteOutlineCanvas
          className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl opacity-70 z-20"
          stroke="rgba(255,255,255,0.5)"
          lineWidth={2}
        />
        <Overlay scrollProgressRef={scrollProgressRef} />
      </div>
    </div>
  )
}

export default App
