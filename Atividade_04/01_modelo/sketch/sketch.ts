class Entity{
  x: number; //atributos
  y: number;
  step: number;
  image: p5.Image;
                          //parametros
  constructor(x: number, y:number, step:number, image: p5.Image){
      this.x=x;
      this.y=y;
      this.step=step;
      this.image=image;

  }
  //metodos
  draw(){
    image(this.image, this.x*this.step, this.y*this.step, this.step, this.step);
  }
  

}

class Board{
  nl: number;
  nc: number;
  step: number;
  background: p5.Image;

  constructor(nc: number, nl: number, step: number, background: p5.Image){
    this.nc = nc;
    this.nl = nl;
    this.step = step;
    this.background = background;
    

  }
  draw(): void{
    image(this.background, 0, 0, this.nc*this.step, this.nl*this.step);
      for(let x = 0; x < this.nc; x++){
        for(let y = 0; y < this.nl; y++){
          noFill();
          stroke(0);
          strokeWeight(2);
          rect(x*this.step, y*this.step, this.step, this.step);
        }
      }
  }

}

let wolf_img: p5.Image;
let wolf_imgin: p5.Image;
let rabbit_img: p5.Image;
let board_img: p5.Image;

let wolf: Entity;
let rabbit: Entity;
let board: Board;


function loadImage(path: string): p5.Image{
  return loadImage(
    path,
    () => console.log("loading " + path + "sucesso"),
    () => console.log("loading " + path + "falhou")
  );
}

function preload() {
  wolf_img = loadImage("../sketch/lobo.png");
  wolf_imgin = loadImage("../sketch/loboinv.png");
  rabbit_img = loadImage("../sketch/coelho.png");
  board_img = loadImage("../sketch/arena1.jpg");

}

function keyPressed(){
  if(keyCode=== LEFT_ARROW){
    wolf.x--;
    wolf.image= wolf_imgin;
  }else if(keyCode=== RIGHT_ARROW){
    wolf.x++;
    wolf.image= wolf_img;
  }else if(keyCode=== UP_ARROW){
    wolf.y--;
  }else if(keyCode=== DOWN_ARROW){
    wolf.y++;
  }

  if(keyCode=== "A".charCodeAt(0)){
    rabbit.x--;
  }else if(keyCode=== "D".charCodeAt(0)){
    rabbit.x++;
  }else if(keyCode=== "W".charCodeAt(0)){
    rabbit.y--;
  }else if(keyCode=== "S".charCodeAt(0)){
    rabbit.y++;
  }

}

function setup() {
  let size = 100;
  wolf = new Entity(2, 2, size, wolf_img);
  rabbit = new Entity(1, 1, size, rabbit_img);
  board = new Board(5, 6, size, board_img);
  createCanvas(board.nc*size, board.nl*size);
}


function draw() {
  board.draw();
  wolf.draw();
  rabbit.draw();
  borda();

  function borda(){

    if(wolf.y<=0)
     wolf.y=0;
    if(wolf.y>=board.nl)
     wolf.y=board.nl-1;

    if(wolf.x<=0)
     wolf.x=0;
    if(wolf.x>=board.nc)
      wolf.x=board.nc-1;
    

    
      //x é a coluna
      //y é a linha


    
    }

    
}


