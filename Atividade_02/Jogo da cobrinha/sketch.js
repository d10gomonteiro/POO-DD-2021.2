const nl=8;
const nc=8;
const lado=50;
let snake_x=2;
let snake_y=0;
let snake_color;
let cell_color;


let food_x=0;
let food_y=0;
let food_color;
let food_count=0;

let inimigox=4;
let inimigoy=6;
let inimigocolor;
let inivelx=2;
let inively=1;

function food_gene(){
  food_x=parseInt(random(0,nc));
  food_y=parseInt(random(0,nl));
}

function inimigo_gene(){
  inimigox=parseInt(random(0,nc));
  inimigoy=parseInt(random(0,nl));
  
  if(inimigox==food_x && inimigoy == food_y){
    inimigo_gene();
  }
}

function setup() {
  createCanvas(nc*lado, nl*lado);
  snake_color= color("yellow");
  cell_color= color("green");
  food_color= color("white");
  inimigocolor= color("red");
  food_gene();
  inimigo_gene();
}


function draw_cell(x, y, color){
  noStroke();
  fill(color)
    square(x*lado+1, y*lado+1, lado-1);
  
}

function draw_mat(){
  fill(155);
  for(let c=0; c<nc; c++)
    for(let l=0; l<nl; l++)
      draw_cell(c, l, cell_color);
}

function snake_walk(){
  if(snake_x== nc)
    snake_x=0;
  if(snake_y==nl)
    snake_y=0;
  if(snake_x==-1)
    snake_x=nc-1;
  if(snake_y==-1)
    snake_y=nl-1;
}

function draw() {
  snake_walk();
  background(90, 250, 20);
  
  
  if(snake_x==food_x && snake_y == food_y){
    food_gene();
    inimigo_gene();
    food_count+=1;
  }
  
  if(snake_x==inimigox && snake_y == inimigoy){
    inimigo_gene();
    food_count=0;
  }
  
  //tentativa de fazer o inimigo se mover
 /* inimigox+=inivelx;
  inimigoy+=inively;
  
  if(inimigox>width)
    inivelx*=-1;
  if(inimigoy>height)
    inively*=-1;
  
  if(inimigoy<0)
    inively*=-1;
  if(inimigox<0)
    inivelx*=-1;
  */
  
  
  draw_mat();
  draw_cell(food_x, food_y, food_color)
  draw_cell(snake_x, snake_y, snake_color);
  draw_cell(inimigox, inimigoy, inimigocolor);
  
  fill(256,0,0)
  textSize(20)
  text(food_count,20,30);
  
  if(food_count == 5 || food_count > 5)
    fill(256, 256, 0);
    text(food_count, 20, 30);
  if(food_count == 10 || food_count > 15)
    fill(256, 20, 256);
    text(food_count, 20, 30);
  if(food_count==20)
    text("VOCÊ PASSOU- Fase 2", 90, height/2);
  
  if(food_count==20)
   cell_color= color("blue"); //segunda fase
}

function keyPressed(){
  if (keyCode === LEFT_ARROW)
    snake_x-=1;
  else if (keyCode === RIGHT_ARROW)
    snake_x+=1;
  else if (keyCode === UP_ARROW)
    snake_y-=1;
  else if (keyCode === DOWN_ARROW)
    snake_y+=1;
}