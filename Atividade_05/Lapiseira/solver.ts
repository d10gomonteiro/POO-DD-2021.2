
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
    public buy(time:number){
        this.time += 5;
    }
    public gasto(){
        this.time-=1;
    }
    public drive(time:number): boolean{
        if(this.pessoa==null)
            console.log("não tem ninguem para dirigir");
            return false;

        let gast = this.moto.gasto()*metros;
        if(gast <= this.moto.time){
            this.moto.time -= gast;
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