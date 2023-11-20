/* Faça um programa para calcular o valor de uma viagem.

voce tera 5 variaveis, sendo elas:
1 - preco do etanol
2 - preco da gasolina
3 - o tipo de combustivel que esta no carro
4 - gasto medio de combustivel do carro por km
5 - distancia em km da viagem

imprima no console o valor gasto para realizar esta viagem

*/

const precoEtanol = 3.75;
const precoGasolina = 4.98;
const distanciaViagem = 325;
let tipoCombustivel = 'Gasolina';
let gastoMedio;
let kmPorLT;

if (tipoCombustivel == 'Etanol') {
    kmPorLT = 7;
    gastoMedio = (precoEtanol / kmPorLT) * distanciaViagem;
    console.log('O valor medio gasto nessa viagem usando Etanol e de R$' + gastoMedio.toFixed(2));
} else if (
    tipoCombustivel == 'Gasolina'
) {
    kmPorLT = 11;
    gastoMedio = (precoGasolina / kmPorLT) * distanciaViagem;
    console.log('O valor medio gasto nessa viagem usando Gasolina e de R$' + gastoMedio.toFixed(2));
}




