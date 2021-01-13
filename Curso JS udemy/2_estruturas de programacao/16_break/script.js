let nome = "Eduardo"

for(let i = 0; i < 10; i += 1) {

    if (i == 3) {
        nome = 'João';
    }

    if (i==5 && nome == "João"){
        console.log(`${i}. O nome é João, pode parar`);
        break;
    }
    console.log(i);
}