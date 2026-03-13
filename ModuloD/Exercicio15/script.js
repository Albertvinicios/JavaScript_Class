function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    var idade = ano - Number(fano.value)

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[Erro] Verifique os dados e tente novamente');
    }else{
        var fsex = window.document.getElementsByName('radsex');
        var genero = ' '
        var img = window.document.createElement('img');
        img.setAttribute('id', 'foto');
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade > 0 && idade < 4){
                img.setAttribute('src','bebe.jpg');
            }else if(idade >= 4 && idade < 10){
                img.setAttribute('src', 'criancahomi.jpg');
            }else if(idade < 21){
                img.setAttribute('src','jovihomi.jpg');
            }else if(idade < 50){
                img.setAttribute('src','adultohomi.jpg');
            }else if(idade < 110){
                img.setAttribute('src','veio.jpg');
            }else{
                img.setAttribute('src','foidebase.jpg');
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade > 0 && idade < 4){
                img.setAttribute('src','bebe.jpg');
            }else if(idade >= 4 && idade < 10){
                img.setAttribute('src', 'criancamule.jpg');
            }else if(idade < 21){
                img.setAttribute('src','jovimule.jpg');
            }else if(idade < 50){
                img.setAttribute('src','adultamule.jpg');
            }else if(idade < 110){
                img.setAttribute('src','veia.jpg');
            }else{
                img.setAttribute('src','foidebase.jpg');
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos um ${genero} com idade ${idade} anos`
        img.style = "border-radius: 50%"; 
        img.width = "250"; 
        img.height = "250";
        res.appendChild(img)
    }
}