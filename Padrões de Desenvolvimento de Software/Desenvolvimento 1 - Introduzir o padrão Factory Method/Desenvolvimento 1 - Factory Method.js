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