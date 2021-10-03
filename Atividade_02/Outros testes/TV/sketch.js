//TV fora do ar
function setup() {
  createCanvas(400, 400);
}

function draw() {
  stroke(random(256), random(256), random(256), random(256));
  strokeWeight(random(100));
  let altura = random(height);
  line(0, altura, width, altura)
}