function setup() {
  createCanvas(400, 400, SVG);
}

function draw() {
  background(255);
  strokeWeight(4);
  stroke(51);
  square(150, 130, 150);
  stroke('red');
  strokeWeight(4);
  circle(130, 130, 120);
  strokeWeight(4);
  stroke(51);
  triangle(60, 105, 88, 50, 116, 105);
  save();
  noLoop();
  }