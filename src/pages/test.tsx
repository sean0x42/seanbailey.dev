/** @format */

import React, { useRef, useEffect } from 'react'
import { TestRenderer } from '../helpers/test'
import SEO from '../components/SEO'

function TestPage() {
  const canvasRef = useRef(null)

  useEffect(() => {
    // Do not run when performing SSR
    if (!window) return

    const renderer = new TestRenderer(canvasRef.current)
    return () => renderer.destroy()
  }, [canvasRef])

  return (
    <div>
      <SEO title="Boids Experiment" />
      <div ref={canvasRef} />
    </div>
  )
}

export default TestPage
