import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { Suspense } from 'react'

function Room({ profile, colors }) {
  const floorColor   = colors[0] || '#e8e1d6'
  const wallColor    = colors[1] || '#cfd5df'
  const accentColor  = colors[2] || '#f8f7f3'
  const furnitureColor= colors[3] || '#bec9d5'

  const config = {
    'Clássico Minimalista': {
      floor: { args: [8, 0.1, 6] },
      wallBack: { args: [8, 4, 0.1], position: [0, 2, -3] },
      wallLeft: { args: [0.1, 4, 6], position: [-4, 2, 0] },
      sofa: { args: [2.5, 0.6, 1], position: [0, 0.3, 1] },
      table: { args: [1.2, 0.4, 0.6], position: [0, 0.2, 0] },
      shelf: { args: [2, 1.5, 0.3], position: [3, 1.5, -2.8] },
      lamp: { position: [2.5, 0, 1.5] },
      rug: { args: [3, 0.05, 2], position: [0, 0.05, 0.5] },
    },
    'Modernista Orgânico': {
      floor: { args: [8, 0.1, 7] },
      wallBack: { args: [8, 4, 0.1], position: [0, 2, -3.5] },
      wallLeft: { args: [0.1, 4, 7], position: [-4, 2, 0] },
      sofa: { args: [2.8, 0.5, 1.2], position: [0, 0.25, 1.5] },
      table: { args: [1.5, 0.35, 0.8], position: [0, 0.175, 0.3] },
      plant: { position: [-2, 0, 2] },
      sphereDecor: { position: [3, 1, -2] },
      rug: { args: [3.5, 0.05, 2.5], position: [0, 0.05, 0.8] },
    },
    'Contemporâneo Afetivo': {
      floor: { args: [7, 0.1, 6] },
      wallBack: { args: [7, 3.5, 0.1], position: [0, 1.75, -3] },
      wallLeft: { args: [0.1, 3.5, 6], position: [-3.5, 1.75, 0] },
      sofa: { args: [2.2, 0.5, 1], position: [0, 0.25, 1] },
      roundTable: { args: [0.8, 0.4, 0.8], position: [0, 0.2, 0] },
      armchair: { args: [0.9, 0.6, 0.8], position: [-1.5, 0.3, 0.5] },
      curtain: { args: [3, 2.5, 0.05], position: [2, 2, -2.9] },
      rug: { args: [3, 0.05, 2], position: [0, 0.05, 0.5] },
    },
  }

  const settings = config[profile] || config['Clássico Minimalista']

  return (
    <>
      <PerspectiveCamera makeDefault position={[5, 4, 8]} fov={50} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} color="#fffbe8" castShadow />
      <directionalLight position={[-3, 5, -3]} intensity={0.5} color="#e8e1ff" />
      <pointLight position={[0, 3, 0]} intensity={0.6} color={accentColor} />

      <Environment preset="apartment" />

      {/* Floor */}
      <mesh position={[0, -0.05, 0]} receiveShadow>
        <boxGeometry args={settings.floor.args} />
        <meshStandardMaterial color={floorColor} roughness={0.8} metalness={0.1} />
      </mesh>

      {/* Back Wall */}
      <mesh position={settings.wallBack.position} receiveShadow>
        <boxGeometry args={settings.wallBack.args} />
        <meshStandardMaterial color={wallColor} roughness={0.9} metalness={0.0} />
      </mesh>

      {/* Left Wall */}
      <mesh position={settings.wallLeft.position} receiveShadow>
        <boxGeometry args={settings.wallLeft.args} />
        <meshStandardMaterial color={wallColor} roughness={0.9} metalness={0.0} />
      </mesh>

      {/* Sofa */}
      {settings.sofa && (
        <mesh position={settings.sofa.position} castShadow>
          <boxGeometry args={settings.sofa.args} />
          <meshStandardMaterial color={furnitureColor} roughness={0.7} metalness={0.05} />
        </mesh>
      )}

      {/* Coffee Table */}
      {settings.table && (
        <mesh position={settings.table.position} castShadow>
          <boxGeometry args={settings.table.args} />
          <meshStandardMaterial color={furnitureColor} roughness={0.6} metalness={0.15} />
        </mesh>
      )}

      {/* Round Table */}
      {settings.roundTable && (
        <mesh position={settings.roundTable.position} castShadow>
          <boxGeometry args={settings.roundTable.args} />
          <meshStandardMaterial color={furnitureColor} roughness={0.6} metalness={0.1} />
        </mesh>
      )}

      {/* Shelf */}
      {settings.shelf && (
        <mesh position={settings.shelf.position} castShadow>
          <boxGeometry args={settings.shelf.args} />
          <meshStandardMaterial color={furnitureColor} roughness={0.5} metalness={0.2} />
        </mesh>
      )}

      {/* Armchair */}
      {settings.armchair && (
        <mesh position={settings.armchair.position} castShadow>
          <boxGeometry args={settings.armchair.args} />
          <meshStandardMaterial color={accentColor} roughness={0.7} metalness={0.05} />
        </mesh>
      )}

      {/* Rug */}
      {settings.rug && (
        <mesh position={settings.rug.position} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[settings.rug.args[0], settings.rug.args[2]]} />
          <meshStandardMaterial color={accentColor} roughness={1} transparent opacity={0.6} />
        </mesh>
      )}

      {/* Lamp */}
      {settings.lamp && (
        <group position={settings.lamp.position}>
          <mesh position={[0, 0.3, 0]} castShadow>
            <cylinderGeometry args={[0.05, 0.08, 0.6, 12]} />
            <meshStandardMaterial color="#8b7355" roughness={0.4} metalness={0.6} />
          </mesh>
          <mesh position={[0, 0.65, 0]}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial color="#fef3c7" emissive="#fef3c7" emissiveIntensity={1.2} />
          </mesh>
        </group>
      )}

      {/* Plant */}
      {settings.plant && (
        <group position={settings.plant.position}>
          <mesh position={[0, 0.3, 0]} castShadow>
            <cylinderGeometry args={[0.15, 0.12, 0.4, 12]} />
            <meshStandardMaterial color="#8b7355" roughness={0.8} />
          </mesh>
          <mesh position={[0, 0.7, 0]} castShadow>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial color="#4a7c59" roughness={0.9} />
          </mesh>
        </group>
      )}

      {/* Sphere decor */}
      {settings.sphereDecor && (
        <mesh position={settings.sphereDecor.position} castShadow>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color={accentColor} roughness={0.3} metalness={0.4} />
        </mesh>
      )}

      {/* Curtain */}
      {settings.curtain && (
        <mesh position={settings.curtain.position} receiveShadow>
          <boxGeometry args={settings.curtain.args} />
          <meshStandardMaterial color={accentColor} roughness={0.95} transparent opacity={0.6} />
        </mesh>
      )}

      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        minDistance={3}
        maxDistance={15}
        maxPolarAngle={Math.PI / 2.1}
      />
    </>
  )
}

export default function RoomViewer({ profile, colors = [] }) {
  if (!profile) return null
  return (
    <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-slate-200 mt-6 bg-slate-100">
      <Canvas shadows>
        <Suspense fallback={null}>
          <Room profile={profile} colors={colors} />
        </Suspense>
      </Canvas>
    </div>
  )
}
