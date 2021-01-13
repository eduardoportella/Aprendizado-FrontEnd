let array1 = [1,2,3,4,5,6,7,8];
let array2 = [1,2,3,4];

function verificarElementosArray(array) {
    if (array.length >= 5){
        console.log('Muitos elementos');
    } else {
        console.log('Poucos elementos');
    }
}

verificarElementosArray(array1);
verificarElementosArray(array2);
