import { Component, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import FleetScene from './FleetScene'

class WebGLErrorBoundary extends Component {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  render() {
    if (this.state.failed) return <div className="hero-canvas-wrap" style={{ background: 'transparent' }} />
    return this.props.children
  }
}

export default function Scene3D({ mouseRef }) {
  return (
    <WebGLErrorBoundary>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <FleetScene mouseRef={mouseRef} />
        </Suspense>
      </Canvas>
    </WebGLErrorBoundary>
  )
}
