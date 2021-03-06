const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/paleta.route');

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/paletas', routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
