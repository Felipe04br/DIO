let nivel = rankeador(151);
let saldo = apurar(120, 30);

console.log(`O Herói tem de saldo de ${saldo} de vitorias e está no nível de ${nivel}`);

function apurar(vitorias, derrotas){
    return vitorias - derrotas;
}

function rankeador(vitorias) {
    let rank = "";

    if (vitorias <= 10) {
        rank = "Ferro";
    } else if (vitorias <= 20) {
        rank = "Bronze";
    } else if (vitorias <= 50) {
        rank = "Prata";
    } else if (vitorias <= 80) {
        rank = "Ouro";
    } else if (vitorias <= 90) {
        rank = "Diamante";
    } else if (vitorias <= 100) {
        rank = "Lendário";
    } else {
        rank = "Imortal";
    }

    return rank;
}