/* Calcule a formula de IMC

IMC = peso / (altura * altura)

elabore um algoritmo de acordo com a tabela abaixo:

IMC em adulto:
- abaixo de 18.5 abaixo do peso
- entre 18.5 e 25 peso normal
- entre 25 e 30 acima do peso
- entre 30 e 40 obeso
- acima de 40 obesidade grave
*/

let peso = 120.7
let altura = 1.72
let IMC = peso / (altura * altura);

if (IMC < 18.5){
    console.log('abaixo do peso')
}else if(IMC >= 18.5 && IMC < 25){
    console.log('peso normal')
}else if(IMC >=25 && IMC < 30){
    console.log('acima do peso')
}else if(IMC >= 30 && IMC < 40){
    console.log('obeso')
} else if (IMC >= 40){
    console.log('obesidade grave')
}