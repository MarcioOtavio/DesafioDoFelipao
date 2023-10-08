// desafio.js
var heroiNome = prompt('Digite o nome do seu herói: ');
var xP = parseInt(prompt('Digite a quantidade de experiência que você tem: '));

switch (true) {
    case xP < 1000:
        console.log(heroiNome + ' está no nível Ferro');
        break;
    case xP > 1000 && xP <= 2000:
        console.log(heroiNome + ' está no nível Bronze');
        break;
    case xP > 2000 && xP <= 5000:
        console.log(heroiNome + ' está no nível Prata');
        break;
    case xP > 5000 && xP <= 7000:
        console.log(heroiNome + ' está no nível Ouro');
        break;
    case xP > 7000 && xP <= 8000:
        console.log(heroiNome + ' está no nível Platina');
        break;
    case xP > 8000 && xP <= 9000:
        console.log(heroiNome + ' está no nível Ascendente');
        break;
    case xP > 9000 && xP <= 10000:
        console.log(heroiNome + ' está no nível Imortal');
        break;
    case xP >= 10001:
        console.log(heroiNome + ' está no nível Radiante');
        break;
    default:
        console.log('Quantidade de experiência inválida');
}
