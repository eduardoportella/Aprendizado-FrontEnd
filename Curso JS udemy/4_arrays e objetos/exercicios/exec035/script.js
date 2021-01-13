let calculadora = {
    soma: function(a,b){
        return a+b;
    },
    subtrair: function(a,b){
        return a-b;
    },
    multiplicar: function(a,b){
        return a*b;
    },
    dividir: function(a,b){
        return a/b;
    }
}

console.log(calculadora.soma(2,3));
console.log(calculadora.subtrair(7,9));
console.log(calculadora.multiplicar(5,5));
console.log(calculadora.dividir(8,2));
