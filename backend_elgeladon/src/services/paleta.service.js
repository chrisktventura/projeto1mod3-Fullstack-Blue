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
  },
];

const findAllPaletasService = () => {
  return paletas;
};
const findByIdPaletasService = (idParam) => {
  return paletas = paletas.find((paleta) => paleta.id === idParam);
};

module.exports = {
  findAllPaletasService,
  findByIdPaletasService,
};
