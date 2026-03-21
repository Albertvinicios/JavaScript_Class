function verificar(){
    var data = new Date();
    var ano = data.getFullYear(); //pega por data com ano completo
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    var idade = ano - Number(fano.value)
    //outra forma de fazer o exercício 15, forma do professor
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[Erro] Verifique os dados e tente novamente'); //se for 0 não existe.
    }else{
        var fsex = window.document.getElementsByName('radsex'); //pega a escolha
        var genero = ' ' //a definir
        var img = window.document.createElement('img'); //cria elemento img
        img.setAttribute('id', 'foto'); //inicia com essas fotos
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade > 0 && idade < 4){
                img.setAttribute('src','bebe.jpg'); //e muda o atributo conforma idade
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
        img.height = "250"; //utilização de design css em js para html
        res.appendChild(img) //método appendChild faz com que a img muda
        //dependendo do resultado do filho.
    }
}