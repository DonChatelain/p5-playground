export default function Walker (p, oX, oY) {
  this.x = oX || p.width / 4;
  this.y = oY || p.height / 2.5;
  this.width = 15;
  this.height = 15;
  this.distance = 15;
  this.color = { r: 0, g: 0, b: 0, a: 50}
  this.xoff = 0.0;
  this.yoff = 0.0;

  this.display = () => {
    p.fill(p.color(this.color.r, this.color.g, this.color.b, this.color.a))
    p.noStroke()
    // this.width = p.map(p.mouseX, 0, p.width, 5, 10)
    p.ellipse(this.x, this.y, this.width, this.height)
  }

  this.move = () => {
    const DIRECTIONS = 4
    const choice = Math.floor(Math.random() * DIRECTIONS)
    this.xoff += Math.random() * 2;
    this.yoff += Math.random() * 2;
    let nX = p.noise(this.xoff) * this.width + this.distance
    let nY = p.noise(this.yoff) * this.height + this.distance
    switch (choice) {
      // case 0: this.x += this.width + this.distance; break
      // case 1: this.y += this.width + this.distance; break
      // case 2: this.x -= this.width + this.distance; break
      // case 3: this.y -= this.width + this.distance; break
      case 0: this.x += nX; break;
      case 1: this.y += nY; break;
      case 2: this.x -= nX; break;
      case 3: this.y -= nY; break;
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