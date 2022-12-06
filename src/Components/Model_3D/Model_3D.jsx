import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Model } from '../../Components/Model_3D/Model'
import './Model_3D.css'

const Model_3D = () => {
  return (
    <div className='containeur_model'>
      <Canvas
        className="canvas_model"
        camera={{ position: [2, 0, 12.25], fov: 15 }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <Model position={[0.025, -0.9, 0]} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default Model_3D
