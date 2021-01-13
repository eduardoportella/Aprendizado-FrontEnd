const cachorro = {
    raca: 'Sem raça definida',
    uivar: function () {
        console.log('AUUUUUUUUUUUUUUUU');
    },
    rosnar: function () {
        console.log('grrrrrrrrrrr');
    },
     setRaca: function (raca) {
        this.raca = raca; //this mesma coisa q cachoroo.raca, mas usa-se this pois buga o js
    },
    getRaca: function () {
        return `A raça é ${this.raca}`;
    }
}


console.log(cachorro.raca);

cachorro.setRaca('Pastor Alemão');
console.log(cachorro.raca);
console.log(cachorro.getRaca());