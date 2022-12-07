const express = require('express');
const router = express.Router();
const app = express();
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`O servidor está rodando na porta ${PORT}`);
});

router.use(express.json());

const frutas = ['Laranja', 'Banana', 'Manga', 'Uva', 'Melancia', 'Abacaxi'];

router.get('/frutas', (req, res) => {
  return res.status(200).json(frutas);
});

router.get('/queryfrutas', (req, res) => {
  const { id } = req.query;

  return res.status(200).json(frutas[id]);
});

router.post('/frutas', (req, res) => {
  const { name } = req.body;
  frutas.push(name);

  return res.status(201).json(frutas);
});

router.put('/frutas/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  frutas[id] = name;

  return res.status(201).json(frutas);
});

router.delete('/frutas', (req, res) => {
  const { id } = req.query;

  frutas.splice(id, 1);

  return res.json({ Message: 'Fruta excluida' });
});

