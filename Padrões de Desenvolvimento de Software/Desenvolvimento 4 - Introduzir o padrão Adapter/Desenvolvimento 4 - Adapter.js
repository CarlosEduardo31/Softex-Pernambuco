class Pato {
    emitirSomPato() {
        console.log('Quack Quack');
    }
}

class Galinha {
    emitirSomGalinha() {
        console.log('Cocorocoo!');
    }
}

class Adaptar extends Galinha {
    constructor(Galinha) {
        super()
        this.Galinha = Galinha;
    }
    emitirQualquerSom() {
        return 'Som estranho!';
    }
}

function clientCode(animal) {
    console.log(animal.emitirQualquerSom());
}

let pato = new Pato();
pato.emitirSomPato();
let pato2 = new Adaptar(pato);
clientCode(pato2);
pato2.emitirSomGalinha();