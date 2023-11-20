class Pessoa{
    nome;
    peso;
    altura;
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularimc(){
        return (this.peso / (this.altura * this.altura));
    }
    classificarimc(){
        const imc = this.calcularimc();
        
if (imc < 18.5){
    return ('abaixo do peso')
}else if(imc >= 18.5 && imc < 25){
    return ('peso normal')
}else if(imc >=25 && imc < 30){
    return ('acima do peso')
}else if(imc >= 30 && imc < 40){
    return ('obeso')
} else if (imc >= 40){
    return ('obesidade grave')
}
        }
    }

const jose = new Pessoa ('jose', 90, 1.75);
console.log('o usuario ' + jose.nome + ' esta ' +jose.classificarimc());
const reynato = new Pessoa ('reynato', 84, 1.74);
console.log('o usuario ' + reynato.nome + ' esta ' +reynato.classificarimc());
