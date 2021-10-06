let wolf_img: p5.Image;

function preload() {
  wolf_img = loadImage("../sketch/lobal.png");
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  image(wolf_img, 0, 0, 400, 400);
}
