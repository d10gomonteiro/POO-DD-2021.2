class Bubble{
  //atributos
  x: number;
  y: number;
  letter: string;
  speed: number;
  static radius: number = 30;
  alive: boolean = true;
  constructor(x: number, y:number, letter:string, speed:number){

  }

  update(): void{

  }

  //métodos
  draw(): void{

  }
}

class Board{
  bubbles: Bubble[] = [];
  static timeout: number = 30;
  timer: number = 0;
  alphabet: string[] = [];

  hits: number = 0;
  errors: number = 0;
  constructor(){

  }

  update(): void{

  }
  draw(): void{

  }
  addBubble(): void{

  }
  checkNetBubble(): void{

  }
  markOutsideBubble(): void{

  }
  clearDeadBubbles(): void{

  }
  hitBubble(keycode: number): void{

  }

}

class Game{
  
}
