function aleatorio(x) {
    let nAleatorio = Math.floor(Math.random()*x) + 1; //math.random nunca eh maior q 1, math.floor eh pra arredondar, +1 eh pq floor arredonda pra baixo, * x eh pra realmente o numero vier aleatorio, senao fica somente '1'
    if (nAleatorio > x){
        aleatorio(x)
    } else if (nAleatorio < x){
        console.log(nAleatorio)
    }
}

aleatorio(7)