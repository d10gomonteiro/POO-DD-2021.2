
class Pessoa {
    idade: number;
    nome: string;
    constructor (idade: number, nome: string) {
        this.idade = idade;
        this.nome = nome;
    }
    toString(): string {
        return "Pessoa: " + this.idade + ":" + this.nome;
    }
}
//let pessoa = new Pessoa(10, "kkk");
//console.log(""+pessoa);

//agregação
class Moto {
    pessoa: Pessoa | null;
    power: number;
    time: number;

    constructor(power: number) {
        this.pessoa = null;
        this.power = 1;
        this.time = 0;
    }
    public buy(time:number): number{
        this.time += 5;
        return time;
    }
    public gasto(): number{

        this.time-=1;
        return this.time;
    }
    public drive(time:number, metros:number): boolean{
        if(this.pessoa==null){
            console.log("não tem ninguem para dirigir");
            return false;
        }
        else if(this.pessoa.idade <= 10 && time > 0){
            console.log ("pode passear");
            return true;
        }
        
        
    }

    public in(pessoa: Pessoa): boolean {
        if(this.pessoa != null){
            console.log("tem gente");
            return false;
        }
        this.pessoa = pessoa;
        return true;
    }

    public out():Pessoa | null{
        if(this.pessoa == null){
            console.log("não tem ninguem");
            return null;
        }
        let pessoa = this.pessoa;
        this.pessoa = null;
        return pessoa;
    }
    public honk(){

    }

    toString(): string {
        return "Pessoa: " + this.idade + ":" + this.nome;
    }
}

class main{
    
}