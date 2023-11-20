class Carro{
    marca;
    cor;
    gasto;
    constructor(marca, cor, gasto){
        this.marca = marca;
        this.cor = cor;
        this.gasto = gasto;
    }

calcularGasto(distancia, precoCombus){
    return (distancia * this.gasto * precoCombus);
}

}

const gol = new Carro('volks', 'branco', 1/7 );
console.log(gol.calcularGasto(10, 10));

const palio = new Carro('fiat', 'vermelho', 1/9);
console.log(palio.calcularGasto(325, 4.87));



/*
function calcularGasto(){
    const precoCombus = 4.75;
    const distancia = 325;

    let valorGasto = (precoCombus / this.gasto ) * distancia;
}*/