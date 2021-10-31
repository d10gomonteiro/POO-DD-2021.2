class Bubble{
  //atributos
  x: number;
  y: number;
  letter: string;
  speed: number;

  static radius: number = 20;
  alive: boolean = true;
  constructor(x: number, y:number, letter:string, speed:number){
    this.x=x;
    this.y=y;
    this.letter=letter;
    this.speed=speed;
  }

  update(): void{
    this.y+=this.speed;
  }

  //métodos
  draw(): void{
    fill(random(255), random(255), random(255));
    stroke(random(256));
    circle(this.x, this.y, 2*Bubble.radius);
    fill(0);
    stroke(0);
    textSize(15);
    text(this.letter, this.x-5, this.y+5);
  }
}

class Board{
  timeout: number = 30;
  timer: number = 0;
  hits = 0;
  mistakes = 0;
  bubbles: Bubble[];
  
  constructor(){
    this.bubbles=[new Bubble(100, 100, "a", 1)];
    this.bubbles.push(new Bubble(200, 100, "b", 2));
    this.bubbles.push(new Bubble(300, 100, "c", 3));

  }

  update(): void{
    this.checkBubbleTime();
    this.markOutsideBubble();
    for (let bubble of this.bubbles){
      bubble.update();
    }
    this.removeDeadBubble();
  }
  draw(): void{
    stroke("white");
    fill("white");
    textSize(30);
    text("hits: "+ this.hits + " Mistakes: " +this.mistakes, 30, 30);
    for (let bubble of this.bubbles)
      bubble.draw();
  }
  removeDeadBubble(): void{
    this.bubbles=this.bubbles.filter(b=>b.alive);
    //let vivas: Bubble[] = [];
    //for(let bubble of this.bubbles)
    //  if(bubble.alive)
    //   vivas.push(bubble);
    //this.bubbles = vivas;
  }

  removeByHit(code: number): void{
    for( let bubble of this.bubbles)
      if(bubble.letter[0].toUpperCase().charCodeAt(0) == code)
        bubble.alive = false;
        this.hits++;
      //  break;
  }

  markOutsideBubble(): void{
    for (let bubble of this.bubbles)
      if(bubble.y+2*Bubble.radius >= height)
        bubble.alive=false;
        this.mistakes++;

  }

  checkBubbleTime(): void{
    this.timer -= 1;
    if(this.timer <=0){
      this.addBubble();
      this.timer=this.timeout;
    }
  }

  addBubble(): void{
    let x= random(0, width - 2*Bubble.radius);
    let y= -2*Bubble.radius;
    let letter = random(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]);
    let speed = random (1,5);
    let bubble = new Bubble(x,y,letter,speed);
    this.bubbles.push(bubble);
  }
  

}

class Game{
  board: Board;
  activeState: () => void;
  constructor(){
    this.board = new Board();
    this.activeState = this.gamePlay;

  }

  gamePlay(): void{
    this.board.update();
    background(0, 124, 90);
    this.board.draw();
    if (this.board.mistakes > 5)
      this.activeState = this.gameOver;
  }

  gameOver(): void{
    background(255, 0, 0);
    fill(random(256), random(256), random(256))
    textSize(100);
    text("Game Over", 50, 300);
  //  if (random(50)< 1)
  //   this.activeState = this.gamePlay;
  }

}

let game: Game;

function setup(){
  createCanvas(800, 600);
  frameRate(30);
  game = new Game();
}

function draw(){
 // background(random(256), random(256), random(256));
  game.activeState();

}

function keyPressed(){
  game.board.removeByHit(keyCode);
}

