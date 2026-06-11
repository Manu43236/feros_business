import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Float, Stars, Html, Line } from '@react-three/drei'
import * as THREE from 'three'

// ── Individual card wrapper: Float + positioned group + Html ──────────────────
function Card({ position, rotation = [0, 0, 0], floatSpeed = 1, width = 200, children }) {
  return (
    <Float speed={floatSpeed} rotationIntensity={0.05} floatIntensity={0.18}>
      <group position={position} rotation={rotation}>
        <Html transform occlude="blending" distanceFactor={10} style={{ width: `${width}px`, pointerEvents: 'none' }}>
          {children}
        </Html>
      </group>
    </Float>
  )
}

// ── Blinking status dot ───────────────────────────────────────────────────────
function Dot({ color = '#22c55e' }) {
  return (
    <span style={{
      display: 'inline-block', width: 7, height: 7, borderRadius: '50%',
      background: color, marginRight: 5, boxShadow: `0 0 5px ${color}`,
      animation: 'dc-pulse 2s ease-in-out infinite',
    }} />
  )
}

// ── Card content components ───────────────────────────────────────────────────
function FleetStatusCard() {
  return (
    <div className="dc">
      <div className="dc-label">Fleet Status</div>
      <div className="dc-value">24 <span className="dc-unit">/ 28 trucks</span></div>
      <div className="dc-row">
        <span><Dot color="#22c55e" />Active</span>
        <span><Dot color="#f59e0b" />4 Idle</span>
      </div>
      <div className="dc-bar"><div className="dc-bar-fill" style={{ width: '86%', background: 'linear-gradient(90deg, #22c55e, #16a34a)' }} /></div>
    </div>
  )
}

function DeliveriesCard() {
  return (
    <div className="dc">
      <div className="dc-label">Today's Deliveries</div>
      <div className="dc-value">142</div>
      <div className="dc-badge dc-badge--green">↑ 12% vs yesterday</div>
    </div>
  )
}

function FinanceCard() {
  return (
    <div className="dc">
      <div className="dc-label">Invoiced Today</div>
      <div className="dc-value" style={{ fontSize: 24 }}>₹ 2,40,000</div>
      <div className="dc-badge dc-badge--amber">₹ 68K outstanding</div>
    </div>
  )
}

function DriversCard() {
  return (
    <div className="dc">
      <div className="dc-label">Drivers on Duty</div>
      <div className="dc-value">38 <span className="dc-unit">/ 42</span></div>
      <div className="dc-bar"><div className="dc-bar-fill" style={{ width: '90%', background: 'linear-gradient(90deg, #e96a1a, #c05318)' }} /></div>
    </div>
  )
}

function AlertCard() {
  return (
    <div className="dc dc--compact">
      <div className="dc-label">⚠ Inventory Alert</div>
      <div className="dc-value" style={{ fontSize: 22, color: '#f59e0b' }}>3 Items</div>
      <div className="dc-sub">Low stock — reorder needed</div>
    </div>
  )
}

// ── Subtle connecting lines between cards ─────────────────────────────────────
function ConnectionLines() {
  const hub = new THREE.Vector3(0, 0.05, 0.4)
  const cards = [
    new THREE.Vector3(-2.1, 0.9, 0),
    new THREE.Vector3( 1.9, 0.7, -0.2),
    new THREE.Vector3( 1.85,-0.8, 0),
    new THREE.Vector3(-1.85,-0.85, 0.1),
    new THREE.Vector3( 0,   0.05, 1.0),
  ]

  return (
    <>
      {cards.map((c, i) => (
        <Line key={i} points={[hub, c]} color="#3a7fd4" lineWidth={0.7} transparent opacity={0.18} />
      ))}
    </>
  )
}

// ── Particle field ────────────────────────────────────────────────────────────
function Particles({ count = 400 }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 22
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5
    }
    return arr
  }, [count])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.028} color="#7eb8e8" transparent opacity={0.35} sizeAttenuation />
    </points>
  )
}

// ── Mouse-responsive camera ───────────────────────────────────────────────────
function CameraParallax({ mouseRef }) {
  const { camera } = useThree()

  useFrame(() => {
    camera.position.x += (mouseRef.current.x * 0.25 - camera.position.x) * 0.04
    camera.position.y += (mouseRef.current.y * 0.12 - camera.position.y) * 0.04
    camera.lookAt(0, 0, 0)
  })

  return null
}

// ── Scene root ────────────────────────────────────────────────────────────────
export default function FleetScene({ mouseRef }) {
  return (
    <>
      <ambientLight intensity={0.5} color="#8ab4d8" />
      <directionalLight position={[4, 5, 4]} intensity={0.9} color="#ddeeff" />
      <pointLight position={[0, 0, 5]} intensity={1.8} color="#c8e0ff" distance={12} decay={2} />

      <Stars radius={80} depth={60} count={2500} factor={3} fade speed={0.3} />
      <Particles />
      <ConnectionLines />

      {/* Fleet Status — top left */}
      <Card position={[-2.1, 0.9, 0]} rotation={[0, 0.14, 0]} floatSpeed={1.1} width={195}>
        <FleetStatusCard />
      </Card>

      {/* Deliveries — top right */}
      <Card position={[1.9, 0.7, -0.2]} rotation={[0, -0.14, 0]} floatSpeed={0.85} width={178}>
        <DeliveriesCard />
      </Card>

      {/* Finance — bottom right */}
      <Card position={[1.85, -0.8, 0]} rotation={[0, -0.12, 0]} floatSpeed={1.0} width={188}>
        <FinanceCard />
      </Card>

      {/* Drivers — bottom left */}
      <Card position={[-1.85, -0.85, 0.1]} rotation={[0, 0.12, 0]} floatSpeed={0.9} width={178}>
        <DriversCard />
      </Card>

      {/* Alert — center, slightly forward */}
      <Card position={[0, 0.05, 1.0]} floatSpeed={1.3} width={168}>
        <AlertCard />
      </Card>

      <CameraParallax mouseRef={mouseRef} />
    </>
  )
}
