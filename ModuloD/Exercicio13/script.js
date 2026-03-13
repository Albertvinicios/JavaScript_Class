function verificar(){
    var ano = window.document.getElementById('txt1');
    var int = Number(ano.value);
    var idade = 2025-int;
    var feminino = window.document.getElementById('chec2').checked;
    var masculino = window.document.getElementById('chec1').checked;
    var infor = window.document.getElementById('detector');
    var imagem = window.document.getElementById('imagem');
    if(feminino == true && masculino == true){
        infor.innerHTML = "Escolha um sexo somente"
    }else if(idade <= 0){
        infor.innerHTML = "<strong>ERRO, não pode ter vindo do futuro<strong/>"   
    }else if(int == 0){
        infor.innerHTML = "você não digitou nenhuma idade"
    }else if(feminino == false && masculino == false){
        infor.innerHTML = "Identifique seu sexo"
    }else if(idade <= 4){
        infor.innerHTML = `você tem apenas ${idade} anos, um bebe!`;
        imagem.src = "bebe.jpg";
    }else if(idade > 4 && idade <= 12 && masculino == true){
        infor.innerHTML = `você tem apenas ${idade} anos, uma criança`;
        imagem.src = "criancahomi.jpg"
    }else if(idade > 4 && idade <= 12 && feminino == true){
        infor.innerHTML = `você tem apenas ${idade} anos, uma criança`;
        imagem.src = "criancamule.jpg"
    }else if(idade > 12 && idade <= 30 && masculino == true){
        infor.innerHTML = `você tem apenas ${idade} anos, um Jovem`;
        imagem.src = "jovihomi.jpg"
    }else if(idade > 12 && idade <= 30 && feminino == true){
        infor.innerHTML = `você tem apenas ${idade} anos, uma Jovem`;
        imagem.src = "jovimule.jpg"
    }else if(idade > 30 && idade <= 60 && masculino == true){
        infor.innerHTML = `você tem ${idade} anos, um adulto responsável`;
        imagem.src = "adultohomi.jpg"
    }else if(idade > 30 && idade <= 60 && feminino == true){
        infor.innerHTML = `você tem ${idade} anos, uma adulta responsável`;
        imagem.src = "adultamule.jpg"
    }else if(idade > 60 && idade <= 120 && masculino == true){
        infor.innerHTML = `você tem ${idade} anos, um Jovem senhor`;
        imagem.src = "veio.jpg"
    }else if(idade > 60 && idade <= 120 && feminino == true){
        infor.innerHTML = `você tem ${idade} anos, uma Jovem senhora`;
        imagem.src = "veia.jpg"
    }else if(idade > 120){
        infor.innerHTML = `você não pode ter ${idade} anos, foi com os anjos, digite a idade`;
        imagem.src = "foidebase.jpg"
    }else{
        infor.innerHTML = "Escolha algum sexo, e digite a idade"
    }
}