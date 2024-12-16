import { useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'
import { Html } from '@react-three/drei';
import { Scroll, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import wireframe from '/beacon-technical.svg'; // Tell webpack this JS file uses this image
import { useEffect } from 'react';

const App = () => {
  const [wireframeOpacity, setWireframeOpacity] = useState(1);


  return (
    <div className="w-full h-full fixed">
      <div className="bg-ant-navy p-8 fixed z-50 shadow-xl w-full text-white">
        Beacon
      </div>

      <div className="fixed top-0 w-[100vw] h-[100vh] pointer-events-none flex justify-center align-middle" style={{opacity: wireframeOpacity}}>
        <div className="-z-50 fixed w-full h-full background-grid"></div>
        <img src={wireframe} width="80%" height="98%" className="-ml-12 mt-2 " style={{resizeMode: 'stretch'}} />
      </div>
      <Canvas>
        <Experience setWireframeOpacity={setWireframeOpacity} />
      </Canvas>
      <div className="background-space -z-50 fixed top-0 w-[100vw] h-[100vh] pointer-events-none">
      </div>
    </div>
  )
}

export default App
