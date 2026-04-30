import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'

function Scene({ profile, color = '#e8e1d6' }) {
  const config = {
    'Clássico Minimalista': {
      geometry: 'box',
      scale: 1.5,
    },
    'Modernista Orgânico': {
      geometry: 'sphere',
      scale: 1.8,
    },
    'Contemporâneo Afetivo': {
      geometry: 'torus',
      scale: 1.5,
    },
  }

  const settings = config[profile] || config['Clássico Minimalista']

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />

      {settings.geometry === 'box' && (
        <mesh scale={settings.scale}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={color} />
        </mesh>
      )}

      {settings.geometry === 'sphere' && (
        <mesh scale={settings.scale}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color={color} />
        </mesh>
      )}

      {settings.geometry === 'torus' && (
        <mesh scale={settings.scale}>
          <torusGeometry args={[1, 0.4, 16, 100]} />
          <meshStandardMaterial color={color} />
        </mesh>
      )}

      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
    </>
  )
}

export default function Profile3DViewer({ profile, color = '#e8e1d6' }) {
  if (!profile) return null

  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden border border-slate-200 mt-6">
      <Canvas>
        <Suspense fallback={null}>
          <Scene profile={profile} />
        </Suspense>
      </Canvas>
    </div>
  )
}
