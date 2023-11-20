class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velha que ${p2.nome}`);
    } else {
        console.log('Pessoa 2 e mais velha');
    }
}

const vitor = new Pessoa ('vitor', 25);
const joao = new Pessoa ('joao', 30);

compararPessoas(vitor, joao);