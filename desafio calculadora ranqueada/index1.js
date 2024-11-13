// Função para calcular o saldo de vitórias
function calcularSaldo(vitorias, derrotas) {
    resultado = vitorias - derrotas; // Retorna o saldo de vitórias (vitórias - derrotas)
    return resultado
  }
  
  // Função para determinar o nível do jogador baseado nas vitórias
  function determinarNivel(vitorias) {
    let nivel;
    
    // Verificando o nível do jogador com base nas vitórias
    switch (true) {
      case (vitorias < 10):
        nivel = "Ferro";
        break;
      case (vitorias >= 10 && vitorias <= 20):
        nivel = "Bronze";
        break;
      case (vitorias >= 21 && vitorias <= 50):
        nivel = "Prata";
        break;
      case (vitorias >= 51 && vitorias <= 80):
        nivel = "Ouro";
        break;
      case (vitorias >= 81 && vitorias <= 90):
        nivel = "Diamante";
        break;
      case (vitorias >= 91 && vitorias <= 100):
        nivel = "Lendário";
        break;
      case (vitorias >= 101):
        nivel = "Imortal";
        break;
      default:
        nivel = "Desconhecido";
        break;
    }
    
    return nivel;
  }
  
  // Exemplo de uso das funções
  let vitorias = 55;  // Número de vitórias
  let derrotas = 30;  // Número de derrotas
  
  // Calculando o saldo de vitórias
  let saldoVitorias = calcularSaldo(vitorias, derrotas);
  
  // Determinando o nível baseado nas vitórias
  let nivel = determinarNivel(vitorias);
  
  // Exibindo a mensagem final
  console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);