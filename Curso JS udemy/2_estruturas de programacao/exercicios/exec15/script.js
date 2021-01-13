let dividendo = 7
let divisor = 0
let primo = true

while (divisor < dividendo){
    divisor++
    if (divisor!=dividendo && divisor!=1 && dividendo%divisor==0){
        primo=false
        console.log('eh divisivel por:', divisor)
    }
    
}
if (primo == true){
    console.log('eh primo')
} else {
    console.log('nao eh primo')
}