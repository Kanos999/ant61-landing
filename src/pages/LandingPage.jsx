import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { Header } from "../components/Header";
import { Button } from "../components/Button";

function Model({ scrollProgressRef, lightRef }) {
  const { scene } = useGLTF("/public/models/beacon.glb");
  const ref = useRef();
  const { camera } = useThree(); // use the default camera

  // Apply glossy material
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshStandardMaterial({
        color: child.material.color,
        metalness: 0.92,
        roughness: 0.35,
        clearcoat: 1,
        clearcoatRoughness: 0.03,
      });
    }
  });

  useFrame(() => {
    const progress = scrollProgressRef.current || 0;
    const spinProgress = 0.1;

    // Log scroll progress to check
    console.log(progress);

    // Rotate model
    if (ref.current) {
      if (progress > spinProgress) {
        ref.current.rotation.y = (progress - spinProgress) * 18;
      } else {
        ref.current.rotation.y = 0;
      }

      if (progress < spinProgress) {
        ref.current.rotation.x = -0.5 + (-progress * Math.PI) / 1.25;
      } 
    }

    // Camera movement
    if (progress < spinProgress ) {
      camera.fov = 45 + progress * 150; // stronger zoom effect
      camera.rotation.x = -progress;
    }

    camera.updateProjectionMatrix();

    if (lightRef.current) {
      lightRef.current.position.z = 75 + progress * 10; // moves down as you scroll
    }
  });

  return (
    <group ref={ref} position={[0, -2, 0]} scale={[-1, -1, 1]}>
      <primitive object={scene} />
    </group>
  );
}

export const LandingPage = () => {
  const scrollProgressRef = useScrollProgress();
  const lightRef = useRef();

  return (
    <div className="App bg-black w-full overflow-x-hidden">
      <Header style={{ position: "fixed" }} />

      <div className="w-screen h-[1200vh] relative">
        <Canvas
          camera={{ position: [0, 0, 15], fov: 45 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
          }}
        >
          <ambientLight intensity={1} />
          <directionalLight
            ref={lightRef}
            position={[0, 75, 20]}
            intensity={0.2}
            color="#f0bc78"
          />
          <directionalLight
            position={[-2, 70, 20]}
            intensity={0.2}
            color="#f0bc78"
          />
          <directionalLight
            position={[2, 70, 20]}
            intensity={0.2}
            color="#f0bc78"
          />
          <directionalLight
            position={[-7, 65, 20]}
            intensity={0.2}
            color="#f0bc78"
          />
          <directionalLight
            position={[7, 65, 20]}
            intensity={0.2}
            color="#f0bc78"
          />
          <directionalLight
            position={[7, 0, 0]}
            intensity={0.2}
            color="#f0bc78"
          />
          <directionalLight
            position={[-7, 0, 0]}
            intensity={0.2}
            color="#f0bc78"
          />
          <directionalLight
            position={[0, 0, 7]}
            intensity={0.2}
            color="#f0bc78"
          />
          <directionalLight
            position={[0, 0, -7]}
            intensity={0.2}
            color="#f0bc78"
          />
          <Model scrollProgressRef={scrollProgressRef} lightRef={lightRef} />
        </Canvas>

        {/* Overlay gradient */}
        <div
          className="fixed top-0 left-0 w-full h-screen pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, transparent 20%, black 100%)",
          }}
        />
      </div>

      {/* Page content */}
      <div className="absolute top-0 h-[100vh] w-full flex items-center justify-center">
        <div className="text-center max-w-4xl px-6 pt-20 space-y-12">
          <h1 className="font-roboto-condensed hero-text-shadow text-white font-semibold text-6xl leading-tight">
            KEEPING SATELLITES ALIVE & ALWAYS WITHIN REACH
          </h1>
          <Button
            className="z-80"
            onClick={() => (window.location.href = "/beacon")}
          >
            LEARN MORE
          </Button>
        </div>
      </div>
    </div>
  );
};
