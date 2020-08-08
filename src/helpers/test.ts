/** @format */

import * as PIXI from 'pixi.js'
import { Vector2 } from './vector'
import { clamp, random, randomVecInCircle, randomVecInRect } from './math'

const drawDebug = true
const totalBoids = 40
const boidPadding = 1.5
const minSpeed = 2
const maxSpeed = 4
const colour = 0x1cfdd3
const size = 3

class Boid {
  public internal: PIXI.Graphics

  position: Vector2
  forward: Vector2
  velocity: Vector2
  acceleration: Vector2

  constructor(position = new Vector2(), forward = new Vector2()) {
    this.internal = new PIXI.Graphics()

    if (drawDebug) {
      this.internal.lineStyle(1, 0xFFFFFF, 0.5)
      this.internal.moveTo(size, size)
      this.internal.lineTo(size * 4, size)
    }

    this.internal.lineStyle(0)
    this.internal.beginFill(colour)
    this.internal.drawCircle(size, size, size)
    this.internal.endFill()

    this.internal.x = position.x
    this.internal.y = position.y

    this.position = position
    this.forward = forward
    this.acceleration = new Vector2()

    const startSpeed = (minSpeed + maxSpeed) / 2
    this.velocity = this.forward.multiply(startSpeed)
  }

  public update() {
    const acceleration = new Vector2()

    // TODO Mutate according to rules

    // Compute a new velocity
    this.velocity = this.velocity.plus(acceleration)

    // Break vector down into it's raw components
    let speed = this.velocity.magnitude()
    const direction = this.velocity.divide(speed)

    // Calculate new velocity
    speed = clamp(speed, minSpeed, maxSpeed)
    this.velocity = direction.multiply(speed)

    this.position = this.position.plus(this.velocity)
    this.forward = direction

    // Apply current velocity
    this.internal.x += this.velocity.x
    this.internal.y += this.velocity.y
    this.internal.rotation = this.forward.rotation()
  }
}

export class TestRenderer {
  element: HTMLDivElement
  app: PIXI.Application
  boids: Boid[]
  bounds: PIXI.Rectangle

  constructor(element: HTMLDivElement) {
    this.element = element
    this.app = new PIXI.Application()
    this.boids = []

    this.bounds = new PIXI.Rectangle(
      -boidPadding,
      -boidPadding,
      this.app.screen.width + boidPadding * 2,
      this.app.screen.height + boidPadding * 2,
    )

    this.element.appendChild(this.app.view)
    this.initBoids()
    this.app.ticker.add(() => this.onUpdate())
  }

  initBoids() {
    for (let i = 0; i < totalBoids; i++) {
      const boid = new Boid(
        randomVecInRect(this.app.screen.width, this.app.screen.height),
        randomVecInCircle(),
      )

      this.boids.push(boid)
      this.app.stage.addChild(boid.internal)
    }
  }

  onUpdate() {
    this.boids.forEach((boid) => {
      boid.update()

      // Keep boids within play area on x axis
      if (boid.internal.x < this.bounds.x) {
        boid.internal.x += this.bounds.width
      } else if (boid.internal.x > this.bounds.x + this.bounds.width) {
        boid.internal.x -= this.bounds.width
      }

      // Keep boids within play area on y axis
      if (boid.internal.y < this.bounds.y) {
        boid.internal.y += this.bounds.height
      } else if (boid.internal.y > this.bounds.y + this.bounds.height) {
        boid.internal.y -= this.bounds.height
      }
    })
  }

  destroy() {
    this.app.destroy(true)
  }
}
