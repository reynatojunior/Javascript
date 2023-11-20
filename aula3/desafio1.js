/* Faca um  algoritmo que tenha 3 notas por aluno, calcule e imprima a sua media
e a sua classificacao conforme a tabela abaixo:

classificacao:
- media menor que 5, reprovacao
- media entre 5 e 7, recuperacao
- media acima de 7, aprovacao
*/

let nota1 = 2.5;
let nota2 = 2.2;
let nota3 = 2.8;
let media;

media = (nota1 + nota2 + nota3) / 3;

if(media < 5){
    console.log('Aluno rewprovado!')
}
else if(media >=5 && media <=7){
    console.log('Aluno em recuperacao!')
}
else if(media > 7){
    console.log('Aluno aprovado!')
}