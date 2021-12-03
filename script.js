//ex1
class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }

  calcularArea(){
      return this.altura * this.largura
  }

}

let squareA = new Retangulo(2, 2);
let squareB = new Retangulo(3, 3);
let squareC = new Retangulo(6, 6);
let squareVector  = [squareA, squareB, squareC];

//ex2
let squareAreas = new Array();
for( let i = 0 ; i < squareVector.length ; i++ ){
   squareAreas[i] = squareVector[i].calcularArea();
}

//ex3
class Endereco {
  logradouro
  numero
  cidade
  estado
  pais
  cep
  constructor(log, num, cid, est, pai, cep) {
    if (
      typeof log !== TYPE.STR ||
      typeof num !== TYPE.STR ||
      typeof cid !== TYPE.STR ||
      typeof est !== TYPE.STR ||
      typeof pai !== TYPE.STR ||
      typeof cep !== TYPE.STR
    ) {
      throw 'Endereço inválido!'
    }
    this.logradouro = log
    this.numero = num
    this.cidade = cid
    this.estado = est
    this.pais = pai
    this.cep = cep
  }
}

//ex4
class Cliente {
  nome
  cpf
  Endereco
  numeroDoCelular
  constructor(nome, cpf, end, cel) {
    if (
      typeof nome !== TYPE.STR ||
      typeof cpf !== TYPE.STR ||
      !(end instanceof Endereco) ||
      typeof cel !== TYPE.STR
    ) {
      throw 'Parâmetro inválido!'
    }

    if (!Cliente.testaCPF(cpf)) {
      throw 'CPF inválido!'
    }

    this.nome = nome
    this.cpf = cpf
    this.endereco = end
    this.numeroDoCelular = cel
  }
}

//ex5
class Conta{
  numeroDaConta
  saldo
  cliente
  constructor(numeroDaConta, saldo, cliente){
    if(
      typeof numConta !== TYPE.STR ||
      typeof saldo !== TYPE.NUM ||
      !(cliente instanceof Cliente)
    ) {
      throw 'Parâmetro inválido!'
    }

    this.numeroDaConta =numeroDaConta
    this.saldo = saldo
    this.cliente = cliente
  }
}