class Strategy {
    execute() {

    }
}

class Calculadora extends Strategy{
    constructor(strategy) {
        super();
        this.strategy = strategy;
    }
    execute(a, b) {
        return strategy.executeOperation(a, b);
    }
}

class Soma extends Strategy {
    executeOperation(a, b) {
        return a + b;
    }
}

class Subtracao extends Strategy {
    executeOperation(a, b) {
        return a - b;
    }
}

class Multiplicacao extends Strategy { 
    executeOperation(a, b) {
        return a * b;
    }
}


const a = 5;
const b = 2;
const sinal = '*';

switch (sinal) {
    case '+':
        var strategy = new Soma();
        var calc = new Calculadora(strategy);
        console.log(`${a} + ${b} = ${calc.execute(a, b)}`);
        break;
    
    case '-':
        var strategy = new Subtracao();
        var calc = new Calculadora(strategy);
        console.log(`${a} - ${b} = ${calc.execute(a, b)}`);
        break;

    case '*':
        var strategy = new Multiplicacao();
        var calc = new Calculadora(strategy);
        console.log(`${a} * ${b} = ${calc.execute(a, b)}`);
        break;
}