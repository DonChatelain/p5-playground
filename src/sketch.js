import p5 from 'p5'

const sketch = (p) => {

  
  // initializes on startup
  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight)
    // p.rectMode(p.CENTER)
    p.background(190) 
    p.rect(p.width/2, p.height/2, 50, 50)
  }

  // runs every frame
  p.draw = () => {
    
  }
}

new p5(sketch, 'root')