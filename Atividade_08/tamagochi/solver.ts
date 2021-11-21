class Tamagochi {
    private idade: number= 0;
    private vivo: boolean;
    private limpoMax: number;
    private limpeza: number;
    private diamantes: number= 0;
    private energia: number;
    private energiaMax: number;
    private saciedade: number;
    private saciedadeMax: number;

    constructor (energia: number, saciedade:number, limpeza: number) {
        this.energia = this.energiaMax;
        this.saciedade = this.saciedadeMax;
        this.limpeza = this.limpoMax;
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
            this.diamantes++;
            this.idade++;
        }
    }
    public brincando(): void{
        this.energia--;
        this.limpeza--;
        this.diamantes++;
        this.idade++;

        if(this.energia= 0){
            console.log("Seu pet morreu sem energia!");
        }
        if(this.limpeza= 0){
            console.log("Seu pet morreu de tanta sujeira!");
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

}