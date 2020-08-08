/** @format */

export class Vector2 {
  x: number
  y: number

  constructor(x: number = 0, y: number = 0) {
    this.x = x
    this.y = y
  }

  public magnitude() {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }

  public rotation() {
    return Math.atan(this.y / this.x)
  }

  public plus(vec: Vector2): Vector2 {
    return new Vector2(this.x + vec.x, this.y + vec.y)
  }

  public multiply(s: number): Vector2 {
    return new Vector2(this.x * s, this.y * s)
  }

  public divide(s: number): Vector2 {
    return new Vector2(this.x / s, this.y / s)
  }
}
