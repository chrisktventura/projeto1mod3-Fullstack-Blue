const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());

const paletas = [
  {
    id: 1,
    sabor: 'Açaí com Leite Condensado',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: './assets/IMG/acai-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: './assets/IMG/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: './assets/IMG/chocolate-belga.png',
    preco: 7.0,
  },
  {
    id: 4,
    sabor: 'Limão',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: './assets/IMG/limao.png',
    preco: 9.0,
  }
];

app.get('/paletas', (req, res) => {
  res.send('Hello World');
});

// Get ALL
app.get('/paletas/todas-paletas', (req, res) => {
  res.send(paletas);
});

// app.get('/paletas/add', (req,res) => {
//   const newPaleta = {
//     id: paletas.length + 1,
//     sabor: req.query.sabor,
//     descricao: req.query.descricao,
//     foto:
//   }
//   res.('/add')
// });

// Get by ID
app.get('/paletas/paleta/:id', (req, res) => {
  const idParam = +req.params.id;
  const chosenPaleta = paletas.find((paleta) => paleta.id === idParam);
  res.send(chosenPaleta);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
