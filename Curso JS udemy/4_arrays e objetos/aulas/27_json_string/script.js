let pessoa = {
    "nome": "Eduardo",
    "idade": 18,
    "profissao": "Programador",
    "hobbies": ["Vídeo game", "Leitura", "Series"]
}

let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);
//console.log(pessoaTexto.nome); nao vai dar pra acessar pois agora eh uma string

let pessoaJSON = JSON.parse(pessoaTexto); //voltar a ser objeto
console.log(pessoaJSON); 
console.log(pessoaJSON.nome);z