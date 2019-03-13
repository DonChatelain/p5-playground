import p5 from 'p5'
import Walker from './Walker'

const FRAME_RATE = 90;

const sketch = (p) => {
  let walter;
  
  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight)
    p.frameRate(FRAME_RATE)
    walter = new Walker(p)
  }

  p.draw = () => {
    // p.background(245)
    walter.move()
    walter.shiftColor()
    walter.display()
  }

}

new p5(sketch, 'root')
