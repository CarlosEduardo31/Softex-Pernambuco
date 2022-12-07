const express = require("express");
const porta = 8080;
const app = express();

app.get('/', (req, resp) => {
  resp.send("Recebi um requisição HTTP GET");
});

app.post('/', (req, resp) => {
  resp.send("Recebi um requisição HTTP POST");
});

app.put('/', (req, resp) => {
  resp.send("Recebi um requisição HTTP PUT");
});

app.post('/', (req, resp) => {
  resp.send("Recebi um requisição HTTP DELETE");
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});