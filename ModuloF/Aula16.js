function parImpar(n){
    if(n%2 == 0){
        return 'par!'
    }else{
        return 'ímpar!'
    }
}

console.log(parImpar(225))

function soma(n1 = 0, n2 = 0){
    return n1 + n2
}

console.log(soma(2, 4))
var a = function(x){
    return x*2;
}

console.log(a(5))

function fatorial(x){
    var fat = 1
    for(let c = x; c > 1; c--){
        fat = fat*c
    }
    return fat
}
console.log(fatorial(5))

function fatorial2(x){
    if(x == 1){
        return 1
    }else{
        return x * fatorial2(x-1)
    }
}
console.log(fatorial2(5))