//glitch
function setup() {
  createCanvas(400, 400);
}

function draw() {
  stroke(random(256), random(256), random(256), random(256));
  strokeWeight(random(100));
  let y= random(height);
  line(0, y, width, y)
  let x = random(width)
  line( x, 0, x, height);
}