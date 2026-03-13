function carregar(){
    var hora = new Date();
    var atual = hora.getHours();
    var msg = window.document.getElementById('msg');
    var imagem = window.document.getElementById('imagem');
    var titulo = window.document.getElementById('titulo');
    var fundo = window.document.getElementById('fundo');
    msg.innerHTML = `Agora são ${atual}hs`;
    if(atual >= 5 && atual <= 12){
        fundo.style.background = "rgba(222, 190, 12, 0.94)";
        titulo.innerHTML = "Bom dia!!";
        imagem.src = "Manha.jpg"; 
    }else if(atual > 12 && atual <=19){
        fundo.style.background = "rgba(231, 127, 9, 0.94)";
        titulo.innerHTML = "Tarde!!";
        imagem.src = "Tarde.jpg";
    }else if(atual < 5 || atual > 19){
        fundo.style.background = "rgba(29, 27, 27, 0.91)";
        titulo.innerHTML = "Boa Noite!!";
        imagem.src = "Noite.jpg";
    }else{
    }
}

