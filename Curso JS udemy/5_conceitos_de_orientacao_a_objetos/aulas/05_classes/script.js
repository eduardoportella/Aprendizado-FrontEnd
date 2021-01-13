let cachorro = {
    patas: 4,
    raca: 'Sem Raça Definida',
    latir: function () {
        console.log('Au au');
    }
}

let labrador = Object.create(cachorro); //pega os negocio do cachorro e passa pro labrador

labrador.latir();

labrador.raca = 'Labrador'

console.log(labrador.raca);
console.log(cachorro.raca);

let pastor = Object.create(cachorro);
pastor.raca = 'Pastor alemao';

console.log(pastor.raca);