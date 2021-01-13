function numero(x){
    return console.log(x, "é um numero")
}

function caractere(x){
    console.log(x, "eh um caractere")
}

function valorLogico(x){
    console.log(x, "eh um valor logico")
}

function qualOTipo(x){
    if (typeof x == 'number'){
        numero(x);
    } if (typeof x == 'string'){
        caractere(x);
    } if (typeof x == 'boolean'){
        valorLogico(x);
    }
}

qualOTipo('a')
