function calcularSaldo(vitorias, derrotas) {
    resultado = vitorias - derrotas
    return resultado
  }
  
  
  function determinarNivel(vitorias) {
    let nivel
    
   
    switch (true) {
      case (vitorias < 10):
        nivel = "Ferro"
        break
      case (vitorias >= 10 && vitorias <= 20):
        nivel = "Bronze"
        break
      case (vitorias >= 21 && vitorias <= 50):
        nivel = "Prata";
        break
      case (vitorias >= 51 && vitorias <= 80):
        nivel = "Ouro"
        break
      case (vitorias >= 81 && vitorias <= 90):
        nivel = "Diamante"
        break
      case (vitorias >= 91 && vitorias <= 100):
        nivel = "Lendário"
        break
      case (vitorias >= 101):
        nivel = "Imortal"
        break
      default:
        nivel = "Desconhecido"
        break
    }
    
    return nivel
  }
  
 
  let vitorias = 55
  let derrotas = 30  
  
  
  let saldoVitorias = calcularSaldo(vitorias, derrotas)
  
  
  let nivel = determinarNivel(vitorias)
  
  
  console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)