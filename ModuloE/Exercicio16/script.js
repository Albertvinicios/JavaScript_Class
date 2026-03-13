function verificar(){
    var ini = document.getElementById('ini');
    var fim = document.getElementById('fim');
    var pas = document.getElementById('pas');
    var text = document.getElementById('conta');
    var i = Number(ini.value);
    var f = Number(fim.value);
    var p = Number(pas.value);
    if(i < f && p > 0){
        text.innerHTML = " "
        for(var c = i ; c <= f; c = c + p){
            text.innerHTML += `${c} 👉` 
        }
        text.innerHTML += "🏁"
    }else{
        window.alert("Erro!! Verifique o passo e o inicio");
    }
}
