var dia = new Date();
var hoje = dia.getDay();

switch(hoje){

    case(0):
        console.log('Hoje é Domingo')
        break

    case(1):
        console.log('Hoje é Segunda-feira')
        break
    case(2):
        console.log('Hoje é Terça-feira')
        break
    case(3):
        console.log('Hoje é quarta-feira')
        break
    case(4):
        console.log("Hoje é quinta-Feira")
        break
    case(5):
        console.log("Hoje é Sexta-Feira")
        break
    case(6):
        console.log("Hoje é Sabado")
        break
    default:
        break
}