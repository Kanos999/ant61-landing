import { useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'
import { Html } from '@react-three/drei';


const App = () => {

  return (
    <Canvas>
      <Experience />
    </Canvas>
  )
}

export default App
