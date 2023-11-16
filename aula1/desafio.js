/* Faça um programa para calcular o valor de uma viagem.

voce tera 3 variaveis, sendo elas:
1 - preço do combustivel
2 - gasto medio de combustivel do carro por km.
3 - distancia em km da viagem;

imprima no console o valor que sera gasto de combustivel para realizar essa viagem.
*/


const precoCombus = 4.75;
const kmCombus = 7;
const distancia = 325;
let valorGasto;

valorGasto = (precoCombus / kmCombus) * distancia

console.log('O valor medio gasto nessa viagem e de R$' + valorGasto.toFixed(2));

