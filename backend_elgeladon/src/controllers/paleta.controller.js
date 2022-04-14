const paletasService = require('../services/paletas.service');

const findAllPaletasController = (req, res) => {
    const paletas = paletaService.findAllPaletasService();
    res.send(paletas);
};

const findByIdPaletaController = (req, res) => {
    const idParam = +req.params.id;
  const chosenPaleta = paletasService.findByIdPaletaService(idParam);
  res.send(chosenPaleta);
};

module.exports = {
    findAllPaletasController,
    findByIdPaletaController
}
