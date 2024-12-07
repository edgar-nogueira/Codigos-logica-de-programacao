class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    
    }
    atacar(){
        let ataque

        switch(this.tipo.toLowerCase()){
            case "mago":
                ataque = "mágia"
                break
            case "guerreiro":
                ataque = "espada"
                break 
            case "monge":
                ataque = "Artes Maciais"
                break 
            case "ninja":
                ataque = "Shuriken"
                break  
            default:
                ataque = "Realizou um ataque desconhecido"

        }
       console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

const heroi1 = new heroi("Arthur", 30, "guerreiro")
heroi1.atacar() // Exemplo de uso