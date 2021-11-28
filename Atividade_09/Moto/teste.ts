const readline = require('readline-sync');
let input = ():  string => readline.question(); //para ler
let write = (x: any) => process.stdout.write("" + x); // para quebrar linha
write("Digite seu nome: ");
let nome = input();
write("Olá " + nome);