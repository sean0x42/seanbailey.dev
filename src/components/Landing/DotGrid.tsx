/** @format */

import React from 'react'
import { useStyles } from 'react-treat'
import RellaxWrapper from 'react-rellax-wrapper'

import * as styleRefs from './DotGrid.treat'

interface Position {
  top?: number | string
  bottom?: number | string
  left?: number | string
  right?: number | string
}

interface DotGridProps {
  width: number
  height: number
  radius?: number
  gap?: number
  position?: Position
}

function totalLength(n: number, radius: number, gap: number) {
  return (n + 1) * radius + (n - 1) * gap
}

function DotGrid(props: DotGridProps) {
  const styles = useStyles(styleRefs)

  // Compute and prep vars
  const { width, height, radius = 4, gap = 77 } = props
  const totalWidth = totalLength(width, radius, gap)
  const totalHeight = totalLength(height, radius, gap)

  // Render circles
  const circles = []
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      circles.push(
        <circle
          key={`${x},${y}`}
          cx={x * (gap + radius) + radius}
          cy={y * (gap + radius) + radius}
          r={radius}
        />,
      )
    }
  }

  return (
    <RellaxWrapper speed={-1.5}>
      <svg
        width={totalWidth}
        height={totalHeight}
        aria-hidden="true"
        className={styles.grid}
        style={props.position ? { ...props.position } : undefined}
      >
        {circles}
      </svg>
    </RellaxWrapper>
  )
}

export default DotGrid
