import p5 from 'p5'
import Walker from './Walker'

const FRAME_RATE = 120;

const sketch = (p) => {
  let walter;
  let wilson;
  let wallace;
  let willy;
  let witley;
  
  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight)
    p.frameRate(FRAME_RATE)
    walter = new Walker(p, p.width / 4, p.height / 2.5)
    wilson = new Walker(p, p.width / 2, p.height / 2)
    wallace = new Walker(p, p.width / 1.5, p.height / 1.5)
    willy = new Walker(p, 50, 50)
    witley = new Walker(p, p.width - 50, p.height - 50)
  }

  p.draw = () => {
    // p.background(245)
    walter.move()
    walter.shiftColor()
    walter.display()
    wilson.move()
    wilson.shiftColor()
    wilson.display()
    wallace.move()
    wallace.shiftColor()
    wallace.display()
    willy.move()
    willy.shiftColor()
    willy.display()
    witley.move()
    witley.shiftColor()
    witley.display()
  }

}

new p5(sketch, 'root')
