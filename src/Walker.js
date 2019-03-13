export default function Walker (p) {
  this.x = p.width / 2;
  this.y = p.height / 2;
  this.width = 9;
  this.height = 9;
  this.distance = 3;
  this.color = { r: 0, g: 0, b: 0, a: 50}

  this.display = () => {
    p.fill(p.color(this.color.r, this.color.g, this.color.b, this.color.a))
    p.noStroke()
    this.width = p.map(p.mouseX, 0, p.width, 5, 10)
    p.rect(this.x, this.y, this.width, this.width)
  }

  this.move = () => {
    const DIRECTIONS = 4
    const choice = Math.floor(Math.random() * DIRECTIONS)
    switch (choice) {
      case 0: this.x += this.width + this.distance; break
      case 1: this.y += this.width + this.distance; break
      case 2: this.x -= this.width + this.distance; break
      case 3: this.y -= this.width + this.distance; break
      default: break
    }
    this.checkBoundaries()
  }

  this.checkBoundaries = () => {
    if (this.x < 0) {
      this.x += this.distance
    } else if (this.x > p.width) {
      this.x -= this.distance
    } else if (this.y < 0) {
      this.y += this.distance
    } else if (this.y > p.height) {
      this.y -= this.distance
    }
  }

  this.shiftColor = () => {
    const distance = 50;
    Math.random() > 0.5 ? this.color.r += distance : this.color.r -= distance
    Math.random() > 0.5 ? this.color.g += distance : this.color.g -= distance
    
    Math.random() > 0.5 ? this.color.b += distance : this.color.b -= distance
    for (let prop in this.color) {
      if (this.color[prop] < 0) this.color[prop] = 0
      else if (this.color[prop] > 255) this.color[prop] = 255
    }
  }
}