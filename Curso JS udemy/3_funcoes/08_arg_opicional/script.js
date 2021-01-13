function soma(a,b) {
    if (a === undefined || b === undefined) {
        console.log("Esta funcao precisa ter os dois argumentos");
    } else {
        return a+b;
    }
}

console.log(soma(1))

console.log(soma(1,2))

function saudacao(nome,idade) {
    if(idade === undefined) {
        console.log("Olá" + nome);
    } else {
        console.log(`Olá ${nome} você tem ${idade} anos`);
    }
}

saudacao('Eduardo', 18)

console.log(saudacao("Matheus")) //no console log, abaixo tem um undefined, entao nao precisa usar console.log