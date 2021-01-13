let pessoa = {
    nome: 'Eduardo'
}

let pessoa2 = pessoa;

let pessoa3 = {
    nome: 'Eduardo'
}

console.log(pessoa == pessoa2);
console.log(pessoa3 == pessoa);
console.log(pessoa3 == pessoa2)

pessoa2.nome = 'Joao' //COMO OS DOIS ESTAO INTERLIGADOS, ALTERAR UM, ALTERA TODOS

console.log(pessoa.nome)

pessoa.nome = 'Maria'

console.log(pessoa2.nome)

console.log(pessoa.nome)