let operacao = 1
let quantidade = 3

let estoque = 5

if (operacao == 1) {
  estoque = estoque + quantidade
  console.log (estoque)
}
else if (quantidade <= estoque && operacao == 2) {
    estoque = estoque - quantidade
    console.log(estoque)
}
else if (quantidade > estoque && operacao == 2){
    console.log("Estoque insuficiente")
}
