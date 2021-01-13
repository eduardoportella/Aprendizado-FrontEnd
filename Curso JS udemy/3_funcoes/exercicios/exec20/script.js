function menorDeIdade(idade){
    return console.log(`Você tem ${idade} anos, você não pode tirar a cnh`)
}

function maiorDeIdade(idade){
    return console.log(`Você tem ${idade} anos, você pode tirar a cnh`)
}

function possoTirarCnh(idade){
    if (idade < 18){
        menorDeIdade(idade)
    } else {
        maiorDeIdade(idade)
    }
} 

possoTirarCnh(19)