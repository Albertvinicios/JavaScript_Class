function carregar(){

    var hora = new Date(); //método para pegar hora atual
    var atual = hora.getHours(); //pega a hora
    var msg = window.document.getElementById('msg'); //pega msg do html
    var imagem = window.document.getElementById('imagem'); //pega imagem do html
    var titulo = window.document.getElementById('titulo'); //pega o titulo
    var fundo = window.document.getElementById('fundo'); //pega o fundo
    msg.innerHTML = `Agora são ${atual}hs`; //muda mensagem para horário atual

    if(atual >= 5 && atual <= 12){ //se a hora for maior que 5 da manha e menor igual que meio dia
        fundo.style.background = "rgba(222, 190, 12, 0.94)";
        titulo.innerHTML = "Bom dia!!";
        imagem.src = "Manha.jpg"; 
    }
    else if(atual > 12 && atual <=19){ //se não se maior que meio dia e menor igual que 19
        fundo.style.background = "rgba(231, 127, 9, 0.94)";
        titulo.innerHTML = "Tarde!!";
        imagem.src = "Tarde.jpg";
    }
    else if(atual < 5 || atual > 19){ //se não se menor que 5 e maior que 9
        fundo.style.background = "rgba(29, 27, 27, 0.91)";
        titulo.innerHTML = "Boa Noite!!";
        imagem.src = "Noite.jpg";
    }
    else{
    }
}

