const readline = require('readline-sync');
class Editor {
    constructor() {
        this.txt = ["O meu nome é: "];
        this.observer = [];
      }
}
class TextEditor extends Editor {
    insertLine () {
        if (this.txt.indexOf == "EOF"){
            console.log ("Edição feita!");
        }
        else {
            this.notify("Edição aberta!");
            let nlinhas = readline.questionInt("Digite a linha para adicionar:");
            let txt = readline.question("Digite um txt para adicionar:");
            this.txt.splice (nlinhas, 0, txt);
            this.notify("Edição salva!");
            return console.log (this.txt);
        }
    }
    removeLine () {
        this.notify("Edição aberta!");
        let nlinhas = readline.questionInt("Digite a linha para remover:");
        let rmvtxt = readline.questionInt("Digite o txt para remover:");
        this.txt.splice(nlinhas, rmvtxt);
        this.notify("Edição feita!"); 
        return console.log (this.txt);
    } 
    subscribe(fn) {
        this.observer.push(fn);
    }
    unsubscribe(fnToRemove) {
        this.observer = this.observer.filter( fn => {
            if(fn != fnToRemove)
            return fn
            }
        )
    }
    notify(data) {
        this.observer.forEach(observer => observer(data));
    }
}

function Observer1 (data){ 
    let observer = data 
    console.log (observer);
} 
function Observer2 (data){ 
  let observer = data 
  console.log (observer);
}

let aplicação = new TextEditor ();
aplicação.insertLine();
aplicação.removeLine();
aplicação.subscribe(Observer1);
aplicação.subscribe(Observer2);
aplicação.unsubscribe(Observer2);