class Fone {
  constructor(private number: string, private label: string) { }
  public toString(): string {
      return this.label + ":" + this.number;
  }
  public static validate(): boolean {
      let valid = "0123456789()-.";
      for (let i = 0; i < this.number.length; i++) {
          if (valid.indexOf(this.number[i]) == -1) {
              return false;
          }
      }
      return true;
  }

  public isValid() {
      ...
  }
}

class Contato {
  //private fones: Array<Fone>;
  private nome: string;
  private fones: Array<Fone>;
  constructor(nome: string, fones:Array<Fone>) {
      this.nome = nome;
      this.fones = new Array<Fone>();
      for (let fone of fones) {
          this.addFone(fone);
      }
  }

  public toString(): string {
      return this.nome + ":" + this.fones.join(",");
  }
  //valida o fone e insere se for válido
  addFone(fone: Fone) {
      //verificar se o telefone é válido antes de inserir
  }
  removeFone(index: number) {
      //verificar se o index é válido antes de remover
      this.fones.splice(index, 1);
  }

  setFones(fones: Array<Fone>) {
      this.fones = [];
      for(let fone of fones) {
          this.addFone(fone);
      }
  }
}

class Agenda {
  private contatos: Array<Contato>;
  constructor() {
      this.contatos = new Array<Contato>();
  }

  //retorna posicao do contato no vetor ou -1
  private findByName(nome: string): number {
      return -1;
  }

  //-----------------------------------------------------

  public add(contato: Contato): void {
      //todo: procura utilizando o findByName
  
      //todo: adicionar se não existir
          //todo: depois de adicionar vai precisar ordenar

      //se o contato com esse nome já existe, adicione os telefones
  }
  public remove(nome: string): void {
      //procura utilizando o método findByName
      //remove se existir utilizando o splite(pos, 1);
      //não precisa ordenar depois de remover
  }
  public getContato(nome: string): Contato | null {
      //procura utilizando o método findByName
      //se contato existir, retorne o contato
      //se não existir retorne null
      return null;
  }
  public toString(): string {
      return this.contatos.join("\n");
  }
}

function main() {
  let agenda = new Agenda();
  while (true) {
      let line = readline.question("");
      let cmd = line.split(" ");
      if (cmd[0] == "add") {
          let contato = new Contato(cmd[1]);
          agenda.add(contato);
      } else if (cmd[0] == "remove") {
          agenda.remove(cmd[1]);
      } else if (cmd[0] == "get") {
          let contato = agenda.getContato(cmd[1]);
          if (contato != null) {
              console.log(contato.toString());
          } else {
              console.log("Contato não encontrado");
          }
      } else if (cmd[0] == "show") {
          console.log(agenda.toString());
      } else if (cmd[0] == "exit") {
          break;
      }
  }
}

main();

let fone = new Fone("casa", "123banana");
fone.isValid();

let contato = new Contato("João", [fone, new Fone("oi", "(85)")]);
//fone invalido
contato.addFone(new Fone("casa", "123banana"));