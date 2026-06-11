import { useEffect, useRef } from 'react'

export default function useMouseParallax() {
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    function onMove(e) {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
      }
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return mouseRef
}
