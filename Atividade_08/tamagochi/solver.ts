class Tamagochi {
    private idade: number= 0;
    private vivo: boolean;
    private limpoMax: number=10;
    private limpeza: number;
    private diamantes: number= 0;
    private energia: number;
    private energiaMax: number=10;
    private saciedade: number;
    private saciedadeMax: number=10;

    constructor (energia: number, saciedade:number, limpeza: number) {
        this.energiaMax = energia;
        this.saciedadeMax = saciedade;
        this.limpoMax = limpeza;
    }


    public getLimpeza(): number{
        return this.limpeza;
    }
    public getLimpoMax(): number{
        return this.limpoMax;
    }
    public getEnergia(): number{
        return this.energia;
    }
    public getEnergiaMax(): number{
        return this.energiaMax;
    }
    public getSaciedade(): number{
        return this.saciedade;
    }
    public getSaciedadeMax(): number{
        return this.saciedadeMax;
    }
    public setLimpeza(limpeza:number){
        this.limpeza=limpeza;
    }
    public setEnergia(energia:number){
        this.energia=energia;
    }
    public setSaciedade(saciedade:number){
        this.saciedade=saciedade;
    }


    public comendo(): void{
        if(this.saciedade< this.saciedadeMax){
            this.saciedade++;
            this.limpeza--;
            this.diamantes++;
            this.idade++;
        }
        console.log("Ele está sem fome");
    }
    public brincando(): void{
        this.energia--;
        this.limpeza--;
        this.diamantes++;
        this.idade++;
        if(this.energia==this.energiaMax-1){
            console.log("cuidado, seu pet está muito cansado");
        }
    }
    public banhando(): void{
        this.limpeza++;
        this.diamantes++;
        this.idade++;
    }
    public dormindo(): void{
        if(this.energia< this.energiaMax){
            this.energia++;
            this.diamantes++;
            this.idade++;
        }
        console.log("Ele está sem sono!");
    }
    public testVivo(): boolean{
        if( this.saciedade == 0 || this.energia == 0 || this.limpeza == 0 )
        console.log("Seu pet faleceu com " + this.idade + "anos e Energia: " + this.energia + ", Saciedade: " + this.saciedade + ", Limpeza: " + this.limpeza)
            return false;
    }
    public toString(): string {
        return "Pet: " + "Energia: " + this.energia + "Saciedade: " + this.saciedade + "Limpeza: " + this.limpeza;
    }

}
class Jogo{
    let pet = new Tamagochi(10, 10, 10);
    console.log(pet);
    pet.comendo();
    console.log("Seu pet está comendo");
    pet.brincando();
    console.log("Seu pet está brincando");
    pet.banhando();
    console.log("Seu pet está tomando banho");
    pet.dormindo();
    console.log("Seu pet está dormindo");
}
