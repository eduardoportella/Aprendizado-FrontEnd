function tamanhoDoTexto(x){
    if (x.length > 10){
        console.log('Texto muito longo');
    } else {
        console.log("Texto dentro do limite");
    }
}

tamanhoDoTexto('Oi, tudo bem?')
tamanhoDoTexto('Coé')
tamanhoDoTexto('Eduardo')
tamanhoDoTexto('Eduardo Portella')