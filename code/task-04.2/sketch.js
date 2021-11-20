function setup() {
  createCanvas(400, 400, SVG);
}

function draw() {
  background(255);
  let white = color (210);
  fill (white);
  square(150, 130, 150);
  let grey = color (150);
  fill (grey);
  circle(130, 130, 120);
  let black = color (50);
  fill (black);
  triangle(60, 105, 88, 50, 116, 105);
  save();
  }