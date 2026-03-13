let num = [2,8,5,6,4]
num[5] = 10
num.push(11)
console.log(num)
console.log(num.indexOf(6))
console.log(`O tamanho do vetor é de ${num.length} posições`)
num.sort()
num.push(20)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`o vetor ordenado é ${num.sort()}`)

for(var pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
for(var pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
