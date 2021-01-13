function criarCachorro(raca, patas, cor) {
    let cachorro = Object.create({});
    cachorro.raca = raca; //atribuir nomes so pro objeto existir
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function () {
        console.log(`${cachorro.raca} diz "Au au"`);
    }
    return cachorro;
}

let doberman = criarCachorro('Doberman', 4, 'preto');
console.log(doberman);

doberman.latir();