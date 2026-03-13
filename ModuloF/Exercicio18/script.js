    var vet = []
function verificar(){
    var num = window.document.getElementById('num')
    var n = Number(num.value)
    var opt = window.document.getElementById('tab')
    if(num.length == 0){
        window.alert(`Digite algum número`)
    }else if(n > 100 || n < 1){
        window.alert("Digite um número válido");
    }else{
        if(vet.indexOf(n) != -1){
            window.alert("Esse Número já foi digitado");
        }else{
            var item = document.createElement('option')
            item.text += `Número ${n} Adicionado`
            opt.appendChild(item)
            vet.push(n)
        }
    }
    num.value = ' '
    num.focus();
}
function finaliza(){
    if(vet.length == 0){
        window.alert(`Digite alguma informação antes`)
    }else{
        var texto = window.document.getElementById('resultados')
        var tamanho = vet.length
        var soma = 0
        var maior = vet[0]
        var menor = vet[0]
        for(var c = 0; c < vet.length; c++){
            soma = soma + vet[c]
            if(vet[c] > maior){
                maior = vet[c]
            }else if(vet[c] < menor){
                menor = vet[c]
            }
        }
        var media = soma / tamanho
        texto.innerHTML = `Ao todo são ${tamanho} elementos <br/>`
        texto.innerHTML += `O maior valor do vetor é ${maior} <br/>`
        texto.innerHTML +=`O menor valor do vetor é ${menor} <br/>`
        texto.innerHTML += `A soma de todos os valores é ${soma} <br/>`
        texto.innerHTML += `A media do vetor é ${media}`
    }
}
