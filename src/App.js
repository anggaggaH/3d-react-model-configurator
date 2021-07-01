import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import { Picker, Shoe } from './components'
import Assets from './components/Assets/Assets'

function App() {
  const [item, setItems] = useState(null);

  return (
    <>
      <Assets setItems={(e)=>setItems(e)}/>
      <Picker />
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]} />
        <Suspense fallback={null}>
          <Shoe item={item}/>
          <Environment preset="city" />
          <ContactShadows 
            rotation-x={Math.PI / 2} 
            position={[0, -0.8, 0]} 
            opacity={0.25} 
            width={10} 
            height={10} 
            blur={1.5} 
            far={0.8} 
          />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
