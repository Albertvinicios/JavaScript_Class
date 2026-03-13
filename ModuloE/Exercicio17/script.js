function verificar(){
  var num = window.document.getElementById('num')
  var n = Number(num.value)
  var opt = window.document.getElementById('tab')
  opt.innerHTML = " "
  if(num.value.length != 0){
    for(var c = 0; c <= 10; c++){
        var item = document.createElement('option')
        var tabuada = n * c

        item.text = `${n} X ${c} = ${tabuada}`
        opt.appendChild(item)
        }
    }else{
        window.alert("Erro, Digite um número");
    }
}