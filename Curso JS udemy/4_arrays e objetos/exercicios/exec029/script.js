let onibus = {
    rodas: 8,
    limitePassageiros: 4,
    portas: 2,
    janelas: 20
}

//console.log(`Há ${onibus.rodas} rodas`); PROF MANDO DELETA
console.log(`O limite de passageiros é ${onibus.limitePassageiros}`);
console.log(`O ônibus contém ${onibus.portas} portas`);

delete onibus.rodas;

//console.log(onibus.rodas);
console.log(`Há ${onibus.janelas} janelas`);
