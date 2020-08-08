/** @format */

import { Vector2 } from './vector'

export function random(min: number, max: number): number {
  return Math.random() * (max - min) + min
}

export function randomVecInRect(width: number, height: number): Vector2 {
  return new Vector2(Math.random() * width, Math.random() * height)
}

export function randomVecInCircle(maxRadius = 1): Vector2 {
  const theta = Math.random() * 360 * (Math.PI / 180)
  const radius = Math.random() * Math.pow(maxRadius, 2)

  return new Vector2(
    Math.sqrt(radius ** 2) * Math.cos(theta),
    Math.sqrt(radius ** 2) * Math.sin(theta),
  )
}

export function clamp(val: number, min: number, max: number): number {
  return Math.min(Math.max(val, min), max)
}
