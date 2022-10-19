const http = require("http");
const PORTA =  process.env.PORTA || 8080;
const servidor = http.createServer();

servidor.on("request", (request, response) => {
    response.end("<h1>Ola Mundo!<h1>");
});

servidor.listen(PORTA, 'localhost',() => {
    console.log(`Servidor iniciado na porta ${PORTA}`);
})

/*
    Para rodar basta abrir o prompt de comando 
    ir até a pasta onde o arquivo javascript esta
    e digitar o seguinte comando: node <nome do arquivo>

    Para testa abra o navegador e digite: localhost:8080

    Para desligar o servidor vá ao prompt de comando e aperte: ctrl + c
*/ 