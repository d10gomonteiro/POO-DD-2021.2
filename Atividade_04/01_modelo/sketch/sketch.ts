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
let fruit_img: p5.Image;
let armadilha_img: p5.Image;
let board_img: p5.Image;
let pedra_img: p5.Image;

let fruit: Entity;
let armadilha: Entity;
let wolf: Entity;
let rabbit: Entity;
let pedra: Entity;
let board: Board;


let score_coelho: number = 0;
let score_lobo: number = 0;


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
  fruit_img = loadImage("../sketch/frutas.png");
  armadilha_img = loadImage("/sketch/armadilha.png");
  pedra_img = loadImage("/sketch/pedra.png");
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

  if(keyCode=== "F".charCodeAt(0)){
    armadilha.x = rabbit.x;
    armadilha.y = rabbit.y;
  }

  if(keyCode=== "M".charCodeAt(0)){
    pedra.x = wolf.x;
    pedra.y = wolf.y;
  }
}

function setup() {
  let size = 100;
  wolf = new Entity(2, 5, size, wolf_img);
  rabbit = new Entity(1, 1, size, rabbit_img);
  fruit = new Entity(3, 5, size, fruit_img);
  pedra = new Entity(5, 6, size, pedra_img);
  armadilha = new Entity(5, 6, size, armadilha_img);
  board = new Board(5, 6, size, board_img);

  createCanvas(board.nc*size, board.nl*size);
}


function draw() {
  board.draw(); 
  text("score do Coelho: " + score_coelho, 5, 50);
  text("score do Lobo: " + score_lobo, 5, 35);
  textSize(15);
  text("O primeiro que fazer 500 pontos ganha!", 5, 20);
 // text("Você sairá em: " + a, 5, 100);
  wolf.draw();
  rabbit.draw();
  fruit.draw();
  pedra.draw();
  armadilha.draw();
  score();
  borda();
  barreira();
  lobo_preso();

function borda(){
    //lobo
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

    //coelho
    if(rabbit.y<=0)
     rabbit.y=0;
    if(rabbit.y>=board.nl)
     rabbit.y=board.nl-1;

    if(rabbit.x<=0)
     rabbit.x=0;
    if(rabbit.x>=board.nc)
      rabbit.x=board.nc-1;

    }
function score(){
    if(rabbit.x===fruit.x && rabbit.y === fruit.y){
      score_coelho = score_coelho+1;
    }
    if(rabbit.x===wolf.x && rabbit.y === wolf.y){
      score_lobo = score_lobo+1;
    }

    if(score_coelho>=500){
      text("O coelho venceu!", 200, 300);
    }
    if(score_lobo>=500){
      text("O lobo venceu!", 200, 300);
    }
  }
function barreira(){
    if(rabbit.y==pedra.y && rabbit.x==pedra.x){
    rabbit.y=pedra.y-1;
    rabbit.x=pedra.x+1;
    }
}

function lobo_preso(){
  if(wolf.y==armadilha.y && wolf.x==armadilha.x){
    wolf.y=armadilha.y;
    wolf.x=armadilha.x;
    }
}

}


//timer: proteger a comida por X tempo