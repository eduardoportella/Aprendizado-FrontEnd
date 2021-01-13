function cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function() {
        console.log('Auuuuuu');
    }
}

let husky = new cachorro('Husky', 4,'Cinza');
husky.uivar();