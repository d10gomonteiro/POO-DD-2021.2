
class Pessoa {
    public idade: number;
    public nome: string;

    constructor (idade: number, nome: string) {
        this.idade = idade;
        this.nome = nome;
    }
    

    toString(): string {
        return "Pessoa: " + this.idade + ":" + this.nome;
    }
}

//agregação
class Moto {
    public p1: Pessoa;
    public power: number;
    public time: number;

    constructor(p1: Pessoa, power: number, time: number) {
        this.p1 = p1;
        this.power = power;
        this.time = time;
    }

    public Motocycle(power: number){ //Comprar mais tempo
      
    }

    public buy(time:number){ //Se estiver vazio, coloca a pessoa na moto e retorna true
        
    }

    public in(p1: Pessoa): boolean {
  //Se houver uma person, retira e retorna
    //Se não, retorna null
}

}
