class Sanduiche {
    getPrice() {}

    getName() {
        return "Sanduiche simples";
    }
}

class CarneBaconMussarela {
    constructor(sanduiche) {
        this.sanduiche = sanduiche;
    }

    getPrice() {
        return 7.49;
    }

    getName() {
        return "Sanduiche  de Frango assado";
    }
}

class FrangoAssado {
    constructor(sanduiche) {
        this.sanduiche = sanduiche;
    }

    getPrice() {
        return 4.50
    }

    getName() {
        return "Sanduiche  de Frango assado";
    }
}

class Pepperoni extends Sanduiche {
    constructor(sanduiche) {
        super();
        this.sanduiche = sanduiche;
    }
    getPrice() {
        return this.sanduiche.getPrice() + 0.99;
    }
}

class QueijoMussarela extends Sanduiche {
    constructor(sanduiche) {
        super();
        this.sanduiche = sanduiche;
    }
    getPrice() {
        return this.sanduiche.getPrice() + 2.00;
    }
}

let carneBacon = new CarneBaconMussarela();
let carnePepperoni = new Pepperoni(carneBacon);
let carneBaconQueijoMussarela = new QueijoMussarela(carneBacon);
let frangoAssado = new FrangoAssado();
let frangoAssadoPepperoni = new Pepperoni(frangoAssado);
let frangoAssadoQueijoMussarela = new QueijoMussarela(frangoAssado);

console.log(`Sanduiche de Carne, Bacon e Mussarela Custa R$${carneBacon.getPrice()}`);
console.log(`Sanduiche de Carne, Bacon, Mussarela e adicional de Pepperoni Custa R$${carnePepperoni.getPrice()}`);
console.log(`Sanduiche de Carne, Bacon, Mussarela e adicional de Mussarela Custa R$${carneBaconQueijoMussarela.getPrice()}`);
console.log(`Sanduiche de Frango Assado Custa R$${frangoAssado.getPrice()}`);
console.log(`Sanduiche de Frango Assado adicional de Pepperoni Custa R$${frangoAssadoPepperoni.getPrice()}`);
console.log(`Sanduiche de Frango Assado adicional de Mussarela Custa R$${frangoAssadoQueijoMussarela.getPrice()}`);
