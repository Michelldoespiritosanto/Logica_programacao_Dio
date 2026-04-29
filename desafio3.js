class Hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método para definir o ataque com base no tipo
  atacar() {
    let ataque;

    switch (this.tipo) {
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
        break;
      default:
        ataque = 'um ataque genérico';
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criando instâncias (objetos) da classe
const heroi1 = new Hero("Aragorn", 87, "guerreiro");
const heroi2 = new Hero("Gandalf", 2000, "mago");

heroi1.atacar(); // Saída: O guerreiro atacou usando espada
heroi2.atacar(); // Saída: O mago atacou usando magia 
