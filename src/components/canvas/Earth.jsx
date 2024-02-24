import { Suspense, useEffect, useState } from "react"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"

import CanvasLoader from '../Loader' 


const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')
  const [wid,setWid] = useState(window.innerWidth)
  useEffect(() => {
    document.addEventListener('change', () => setWid(window.innerWidth))
  },[window.innerWidth])
  return (
    <primitive
     object={earth.scene}
     scale={2.5}
     position-y={0}
     rotation-y={0}
    >

    </primitive>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas 
    shadows
    frameloop="demand"
    gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI/ 2}
          minPolarAngle={Math.PI/ 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas