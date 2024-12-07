let resultadoFuncao = calculo(21, 10)
let nivel

function calculo(vitorias, derrotas){
    let resultado = vitorias - derrotas
    return resultado   
}

switch(true){
    case resultadoFuncao > 0 && resultadoFuncao < 10:
        nivel = "Ferro"
        break
    case resultadoFuncao < 20:
        nivel = "Bronze"
        break
    case resultadoFuncao < 50:
        nivel = "Prata"
        break
    case resultadoFuncao < 80:
        nivel = "Ouro"
        break
    case resultadoFuncao < 90:
        nivel = "Diamante"
        break
    case resultadoFuncao < 100:
        nivel = "Lendário"
        break
    default:
        nivel = "Imortal"
}


console.log("O herói tem um saldo de vitórias de: " + resultadoFuncao + " e está no nível de: " + nivel)