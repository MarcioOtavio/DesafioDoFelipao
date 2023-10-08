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
function calcularNivelRankeadas(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel = '';

    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }

    return `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`;
}

// Exemplo de uso da função
const vitorias = 60;
const derrotas = 20;
const resultado = calcularNivelRankeadas(vitorias, derrotas);
console.log(resultado);

