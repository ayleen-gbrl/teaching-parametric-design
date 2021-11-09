let xValue;
let colorValue;

function setup() {
  createCanvas(400, 400);
  frameRate(10);
}

function draw() {
noLoop();
  background(255);
  fill("black");
  for (let x = 0; x < 10; x += 1) {
    for (let y = 0; y < 10; y += 1) {
      circle(
        100 + x * 20,
        100 + y * 20,
        x * y
      );
    }
  }
}
