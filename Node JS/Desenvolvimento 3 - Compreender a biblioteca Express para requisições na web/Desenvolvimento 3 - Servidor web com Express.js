const express = require('express');
const app = express();
const port = 8080;

app.get('/', function(req, res) {
  res.send(`
  <h1>Metodo GET</h1>

  <form action="/post" method="post">
		<label for="email">Email:</label>
		<input type="email" name="email" id="email">
		<label for="mensagem">Mensagem:</label>
		<textarea name="mensagem" id="mensagem"></textarea>
		<input type="submit" value="Enviar">
	</form>
  `);
});

app.post('/post', function (req, res) {
    res.send('<h1>Metodo Post</h1>');
  });

app.listen(port, () => {
    console.log(`Exemplo app node rodando no endereço http://localhost:${port}`)
 });