class Veiculo {

    constructor(modelo, marca, cor, numeroRodas) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    }

    clone() {

    }

    represent() {

    }
}

class Bicicleta extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, macha) {
        super(modelo, marca, cor, numeroRodas);
        this.macha = macha;
    }

    clone() {
        let bicicletaGts = new Bicicleta('GTS287', 'GTS', 'Vermelho', 2, true);
        return bicicletaGts;
    }

    represent() {
        return console.log('Metodo represent da Bicicleta')
    }
}

class Caminhao extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, arcondicionado) {
        super(modelo, marca, cor, numeroRodas);
        this.arcondicionado = arcondicionado;
    }

    clone() {
        let caminhaoScania = new Caminhao('Scania405', 'Scania', 'Branco', 6, false);
        return caminhaoScania;
    }
    represent() {
        return console.log('Metodo represent do Caminhão')
    }
}



class Aplicacao {

    criarArray(obj1, obj2) {
        for (let i = 0; i < 3; i++) {
            arrayVeiculo.push(obj1);
            arrayVeiculo.push(obj2);
        }
    }

    cloneArray(array) {
        for (let i = 0; i < 6; i++) {
            let clone = Object.create(array[i])
            arrayVeiculoClone.push(clone)
        }
    }
}


let bicicleta = new Bicicleta;
let caminhao = new Caminhao;
let aplicacao = new Aplicacao;
let arrayVeiculo = [];
let arrayVeiculoClone = [];

aplicacao.criarArray(bicicleta.clone(), caminhao.clone())
aplicacao.cloneArray(arrayVeiculo);
console.log(`Array de Veículo`);
console.log(arrayVeiculo);
console.log(`Array de clone de cada elemento do arrayVeiculo`);
console.log(arrayVeiculoClone)

console.log(`Retorno da função represent de cada elemento desse novo array de clones de veículos.`);
for (let i = 0; i < arrayVeiculoClone.length; i++) {
    arrayVeiculoClone[i].represent()
}


/* RESULTADO DA EXECUÇÃO DO CÓDIGO
Array de Veículo
[
  Bicicleta {
    modelo: 'GTS287',
    marca: 'GTS',
    cor: 'Vermelho',
    numeroRodas: 2,
    macha: true
  },
  Caminhao {
    modelo: 'Scania405',
    marca: 'Scania',
    cor: 'Branco',
    numeroRodas: 6,
    arcondicionado: false
  },
  Bicicleta {
    modelo: 'GTS287',
    marca: 'GTS',
    cor: 'Vermelho',
    numeroRodas: 2,
    macha: true
  },
  Caminhao {
    modelo: 'Scania405',
    marca: 'Scania',
    cor: 'Branco',
    numeroRodas: 6,
    arcondicionado: false
  },
  Bicicleta {
    modelo: 'GTS287',
    marca: 'GTS',
    cor: 'Vermelho',
    numeroRodas: 2,
    macha: true
  },
  Caminhao {
    modelo: 'Scania405',
    marca: 'Scania',
    cor: 'Branco',
    numeroRodas: 6,
    arcondicionado: false
  }
]
Array de clone de cada elemento do arrayVeiculo
[
  Bicicleta {},
  Caminhao {},
  Bicicleta {},
  Caminhao {},
  Bicicleta {},
  Caminhao {}
]
Retorno da função represent de cada elemento desse novo array de clones de veículos.
Metodo represent da Bicicleta
Metodo represent do Caminhão
Metodo represent da Bicicleta
Metodo represent do Caminhão
Metodo represent da Bicicleta
Metodo represent do Caminhão
*/




