function verificar() {

  var ano = window.document.getElementById("txt1"); //assim que digitar o valor do ano de nascimento
  var int = Number(ano.value); //pega o valor digitado
  var idade = 2025 - int; //subtrai do ano atual nesse caso 2025
  var feminino = window.document.getElementById("chec2").checked; //verifica se estáticado masculino e feminino
  var masculino = window.document.getElementById("chec1").checked;
  var infor = window.document.getElementById("detector");//verifica se a informação está presente
  var imagem = window.document.getElementById("imagem"); //variável atribuida a imagem

  if (feminino == true && masculino == true) { //se feminino e masculino estiver ticado
    infor.innerHTML = "Escolha um sexo somente"; 
  }
    else if (idade <= 0) { //se não se a idade for menor do que 0
    infor.innerHTML = "<strong>ERRO, não pode ter vindo do futuro<strong/>";
    //é possível abrir uma janela de erro
  } 
    else if (int == 0) { //se for igual a 0
    infor.innerHTML = "você não digitou nenhuma idade"; //não tem idade
  } 
    else if (feminino == false && masculino == false) { //se nenhum estiver ticado
    infor.innerHTML = "Identifique seu sexo";
  } 
    else if (idade <= 4) { //se menor do que 4 anos
    infor.innerHTML = `você tem apenas ${idade} anos, um bebe!`;
    imagem.src = "bebe.jpg";
  } 
    else if (idade > 4 && idade <= 12 && masculino == true) { //se for maior que 4 e menor igual a 12
    infor.innerHTML = `você tem apenas ${idade} anos, uma criança`; //homem
    imagem.src = "criancahomi.jpg";
  } 
    else if (idade > 4 && idade <= 12 && feminino == true) { //se for maior que 4 e menor igual a 12 
    infor.innerHTML = `você tem apenas ${idade} anos, uma criança`; //mulher
    imagem.src = "criancamule.jpg";
  } 
    else if (idade > 12 && idade <= 30 && masculino == true) { //se maior que 12 menor igual a 30
    infor.innerHTML = `você tem apenas ${idade} anos, um Jovem`; //homem
    imagem.src = "jovihomi.jpg";
  } 
    else if (idade > 12 && idade <= 30 && feminino == true) { //se maior que 12 menor igual a 30
    infor.innerHTML = `você tem apenas ${idade} anos, uma Jovem`; //mulher
    imagem.src = "jovimule.jpg";
  } 
    else if (idade > 30 && idade <= 60 && masculino == true) { //se maior que 30 menor igual a 60
    infor.innerHTML = `você tem ${idade} anos, um adulto responsável`; //homem
    imagem.src = "adultohomi.jpg";
  } 
    else if (idade > 30 && idade <= 60 && feminino == true) { //se maior que 30 menor igual 60
    infor.innerHTML = `você tem ${idade} anos, uma adulta responsável`;
    imagem.src = "adultamule.jpg";
  } 
    else if (idade > 60 && idade <= 140 && masculino == true) { //se maior que 60 menor igual 120
    infor.innerHTML = `você tem ${idade} anos, um Jovem senhor`; //homem
    imagem.src = "veio.jpg";
  } 
    else if (idade > 60 && idade <= 140 && feminino == true) { //se maior que 60 menor igual 140
    infor.innerHTML = `você tem ${idade} anos, uma Jovem senhora`; //mulher
    imagem.src = "veia.jpg";
  } 
    else if (idade > 140) { //idade quase impossível de alcançar
    infor.innerHTML = `você não pode ter ${idade} anos, foi com os anjos, digite a idade`;
    imagem.src = "foidebase.jpg";
  } 
    else { //nenhum sexo nenhuma idade
    infor.innerHTML = "Escolha algum sexo, e digite a idade";
  }
}
