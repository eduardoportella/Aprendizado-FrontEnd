var n1 = 1
var n2 = 2
var n3 = 3
var n4 = 3

if(n1<n2 && n2<n3){
    console.log('1 eh menor q 2 e 2 eh menor q 3')
}
if (n1>n2 || n2<n3){
    console.log(`${n1} eh maior q ${n2} ou ${n2} eh menor do q ${n3}`)
}
if (!(n3 != n4)){
    console.log(`${n3} nao eh diferente de ${n4}`)
}