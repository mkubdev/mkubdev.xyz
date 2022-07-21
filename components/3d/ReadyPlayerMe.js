import Model from '@/components/Model'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei/core/OrbitControls'

const ReadyPlayerMe = () => {
  const modelPosition = [0.025, -0.9, 0] // [0.025, -0.9, 0]
  const cameraPosition = [2, 0, 8.25] // [2, 0, 12.25]
  return (
    <div className="h-96">
      <Canvas
        camera={{ position: cameraPosition, fov: 15 }}
        style={{
          backgroundColor: 'transparent',
        }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <Model position={modelPosition} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default ReadyPlayerMe
