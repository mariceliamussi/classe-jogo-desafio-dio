class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      const ataque = {
        guerreiro: "espada",
        mago: "magia",
        monge: "artes marciais",
        ninja: "shuriken"
      }[this.tipo];
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}.`);
    }
  }
  
   const mago = new Heroi("Merlin", 100, "mago");
  const guerreiro = new Heroi("Arthur", 30, "guerreiro");
  const monge = new Heroi("Tenzin", 50, "monge");
  const ninja = new Heroi("Akari", 25, "ninja");
  
  mago.atacar();
  guerreiro.atacar();
  monge.atacar();
  ninja.atacar();
  