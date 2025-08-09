//Objetivo
// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante
let nome = "Felipe "
let expHeroi = 9500
let nivel = ""
if (expHeroi < 1000) {
    nivel = "Ferro"
}
else if (expHeroi >= 1000 && expHeroi <= 2000) {
    nivel = "Bronze"
}
else if (expHeroi >= 2001 && expHeroi <= 5000) {
    nivel = "Prata"
}
else if (expHeroi >= 5001 && expHeroi <= 7000) {
    nivel = "Ouro"
}
else if (expHeroi >= 7001 && expHeroi <= 8000) {
    nivel = "Platina"
}
else if (expHeroi >= 8001 && expHeroi <= 9000) {
    nivel = "Ascendente"
}
else if (expHeroi >= 9001 && expHeroi <= 10000) {
    nivel = "Imortal"
}
else if (expHeroi >= 10001) {
    nivel = "Radiante"
}

console.log("O Herói de nome " + nome + "está no nível de " + nivel)