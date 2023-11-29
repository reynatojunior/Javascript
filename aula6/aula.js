/*const alunos = ['joao', 'vitor', 'marina'];

alunos.push('renan');

alunos[5] = 'bruno';

console.log(alunos);*/

/*
const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];

console.log(soma / 5);

*/

/*
const nome = 'Reynato Junior';


for (let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}
*/

const notas = [];

//notas.push(5);
notas.push(7);
notas.push(8);
//notas.push(2);
notas.push(9);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
    
}

const media = soma / notas.length;
console.log(media);