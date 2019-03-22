import p5 from 'p5'
import Particle from './Particle'

const sketch = (p) => {
  let col = 0;
  let inc = 0.1;
  let start = 0
  let scl = 20;
  let cols
  let rows
  let zoff = 0;
  let fr;
  let particle = [];
  let flowfield = [];
  
  // initializes on startup
  p.setup = () => {
    p.createCanvas(4000, 4000)
    
    cols = Math.floor(p.width/scl);
    rows = Math.floor(p.height/scl);
    
    flowfield = new Array(cols * rows);
    
    for (var i = 0; i < 500; i++) {
      particle[i] = new Particle(p, cols, scl);
    }
    p.background(255);
  }

  // runs every frame
  p.draw = () => {
    var yoff = 0;
    for (var y = 0; y < rows; y++) {
      var xoff = 0;
      for (var x = 0; x < cols; x++) {
        var index = (x + y * cols) ;
        var r = p.noise(xoff,yoff,zoff) * p.TWO_PI * 4;
        var v = p5.Vector.fromAngle(r);
        v.setMag(1);
        flowfield[index] = v;
        xoff += inc;
        p.fill(r);
        p.stroke(0,50);
        p.push();
        p.translate(x*scl, y*scl);
        p.rotate(v.heading());
        p.strokeWeight(1);
        p.pop();
      }
  
      yoff += inc;
      zoff += 0.0002;
    }
    
  
    for ( var i = 0; i < particle.length; i++) { 
      particle[i].follow(flowfield);
      particle[i].update();
      particle[i].edges();
      particle[i].show();
    }
    
    if (col <= 255) {
      col++;
    } else if (col > 255) {
      col = 0;
    }
  }

  p.keyPressed = () => {
    if (p.key === 'Enter') {
      const canvas = document.getElementsByTagName('canvas')[0]
      canvas.toBlob(blob => {
        fetch('http://localhost:3000/upload', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'image/png'
          },
          body: blob
        })
      })
    }
  }
}

new p5(sketch, 'root')
