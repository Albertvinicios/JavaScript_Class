var idade = 23;
//Lógica do if else para idade
if(idade < 16){
    console.log('Não Pode Votar');
}else if(idade < 16 || idade > 65){
    console.log('Voto opcional');
}else if(idade > 18){
    console.log('Voto Obrigatório');
}else{
}