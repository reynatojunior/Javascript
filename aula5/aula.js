/*class Pessoa{
    nome;
    idade;

    descrever() {
        console.log(`${this.nome} ${this.idade}`);
    }
}

const vitor = new Pessoa(
  vitor.nome = ('vitor j araujo');
  vitor.idade = 25;
);

console.log(vitor);
*/


// Definição da classe Pessoa
class Pessoa {
    // Construtor da classe
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
      this.anoNascimento = 2023 - idade;
    }
  
    // Método para cumprimentar
    cumprimentar() {
      console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos. e nasceu em ${this.anoNascimento}`);
    }
  }
  
  // Exemplo de uso da classe Pessoa
  const pessoa1 = new Pessoa("João", 25);
  const pessoa2 = new Pessoa("Maria", 39);
  const pessoa3 = new Pessoa("JOSE", 45);
  
  pessoa1.cumprimentar(); // Saída: Olá, meu nome é João e eu tenho 25 anos.
  pessoa2.cumprimentar(); // Saída: Olá, meu nome é Maria e eu tenho 30 anos.
  pessoa3.cumprimentar();