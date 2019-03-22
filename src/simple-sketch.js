import p5 from 'p5'

const sketch = (p) => {
  const circleSize = 50;

  let xoff1 = 0;
  let xoff2 = 10000;
  let color = 0;

  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);
  }

  p.draw = () => {
    //background(51);
    let x = p.map(p.noise(xoff1), 0, 1, 0, p.width);
    let y = p.map(p.noise(xoff2), 0, 1, 0, p.width);
    xoff1 += 0.01;
    xoff2 += 0.01;
    p.stroke(color, 100, 200);
	
    p.ellipse(x % 1000, y % 700, circleSize, circleSize);
	
    if (color <= 255) {
      color++;
    } else if (color > 255) {
      color = 0;
    }
	
  }
}

new p5(sketch, 'root')
