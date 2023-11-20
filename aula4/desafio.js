function escreverNome(nome){
    return (nome);
}

function verificarMaiorIdade(idade){
    if (idade >=18){
        console.log(escreverNome('Reynato ') + 'é maior de idade');
    } else {
        console.log(escreverNome('Reynato ') + 'é menor de idade');
    }
}

verificarMaiorIdade(39);