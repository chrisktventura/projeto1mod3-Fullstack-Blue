const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/paletas.route')


const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/paletas', routes);





// Get by ID
app.get('/paletas/paleta/:id', (req, res) => {
  const idParam = +req.params.id;
  const chosenPaleta = paletas.find((paleta) => paleta.id === idParam);
  res.send(chosenPaleta);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
