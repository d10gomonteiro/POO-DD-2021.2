class Fone {
    private label: string;
    private number: string;

    constructor(label: string, number: string) {
        this.setLabel(label);
        this.setNumber(number);
    }

    public getLabel() {
        return this.label;
    }

    public getNumber() {
        return this.number;
    }

    public setLabel(valor: string) {
        this.label = valor;
    }

    public setNumber(valor: string) {
        this.number = valor;
    }

    public valido(): boolean {
        if (Fone.validacao(this.number)) {
            return true;
        } else {
            return false;
        }
    }

    static validacao(fone: string): boolean {
        let strings_validas = "0123456789()."
        for (let i = 0; i < fone.length; i++) {
            if (strings_validas.indexOf(fone[i]) == -1) {
                console.log("esse número não é válido!")
                return false
            }
        }
        return true;
    }
    public toString(): string {
        return `${this.label}: ${this.number}`
    }
}

class Contato {
    constructor(private name: string, private fones: Array<Fone>) {
    }

    public getName() {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getFones() {
        return this.fones;
    }

    public setFones(fones: Array<Fone>) {
        for (let i = 0; i < fones.length; i++) {
            this.addFone(fones[i]);
        }
    }

    public addFone(fone: Fone) {
        if (fone.valido()) {
            this.fones.push(fone);
        }
    }

    public remove_fone(index: number) {
        if (index < this.fones.length) {
            this.fones.splice(index, 1);
        } else {
            console.log("O índice não existe!");
        }
    }

    public toString() {
        let saida = `- ${this.name}`;
        for (let i = 0; i < this.fones.length; i++) {
            saida += `[${this.fones.indexOf(this.fones[i])} : ${this.fones[i].getLabel()} : ${this.fones[i].getNumber()}]`
        }
        return saida;
    }
}

class Agenda {
    private contatos: Array<Contato>

    public constructor(contatos: Array<Contato>) {
        this.contatos = contatos;
    }

    private findPos(name: string) {
        for (let i = 0; i > this.contatos.length; i++) {
            if (this.contatos[i].getName() == name) {
                return i;
            }
        }
        return -1;
    }

    private findContact(name: string) {
       
    }

    public addContato(contato: Contato) {
      
    }

    public removeContato(contato: Contato) {
   
    }

  //  public search(pattern: string): Array<Contato> {

  //  }

    public toString() {
        let saida: string = ""
        for (let i = 0; i < this.contatos.length; i++) {
            saida += `${this.contatos[i]}`
        }
        return saida;
    }
}



