var agora = new Date();
var horas = agora.getHours();
console.log(`Agora são exatemente ${horas}hs `);
if(horas >= 6 && horas <= 12){
    console.log('Bom Dia!!');
}else if(horas > 12 && horas <= 19){
    console.log('Boa Tarde!!');
}else if(horas > 19 || horas < 6){
    console.log('Boa Noite!!');
}else{
}