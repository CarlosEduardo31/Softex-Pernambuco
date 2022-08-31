/*

Aplique o Factory Method para fabricar computadores, usando como base o exemplo visto de static e parametrizado no hipertexto.

Considere que:
- os produtos devem implementar uma interface comum;
- o cliente deve utilizar apenas a fábrica para criar instâncias do tipo abstrato da interface;
- todo computador deve ter, com getters, os atributos: ram, hdd, cpu e type;
- há dois tipos de computadores: pc e server;
- RAM e HD devem estar em GB;
- CPU deve estar em GHz;
- através do tipo informado, a fábrica decide qual tipo de computador irá instanciar;
- quando o método .toString() for aplicado a um computador, ele deve imprimir seus atributos.

*/

class ComputadorDesktop {
    constructor(cpu, ram, hd) {
        this.tipo = 'Pc'
        this.cpu = cpu
        this.ram = ram
        this.hd = hd
      }
    
      toString() {
        console.log(`
        Computador do tipo: ${this.tipo}
        Processador: ${this.cpu}
        Memoria Ram: ${this.ram}
        Armazenamento: ${this.hd}`)
      }
}

class ComputadorServer {
    constructor(cpu, ram, hd) {
        this.tipo = 'Server'
        this.cpu = cpu
        this.ram = ram
        this.hd = hd
      }
      toString() {
        console.log(`
        Computador do tipo: ${this.tipo}
        Processador: ${this.cpu}
        Memoria Ram: ${this.ram}
        Armazenamento: ${this.hd}`)
      }
}

class Fabrica {
    criarComputador(tipo) {
        switch (tipo){
            case 'desktop':
                return new ComputadorDesktop('4.60 GHz','16 Gb','500 Gb');
            case 'server':
                return new ComputadorServer('7.70 GHz','128 Gb','8000 Gb');
            default:
                return console.log('Não temos esse tipo de computador.');
        }
    }
}

const computador = new Fabrica();
const server = computador.criarComputador('server')
const desktop = computador.criarComputador('desktop')
server.toString()
desktop.toString()

/*
RESULTADO DA EXECUÇÃO DO CÓDIGO
Computador do tipo:Server
Processador: 7.70 GHz
Memoria Ram: 128 Gb
Armazenamento: 8000 Gb

Computador do tipo:Pc
Processador: 4.60 GHz
Memoria Ram: 16 Gb
Armazenamento: 500 Gb

*/