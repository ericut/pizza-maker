let tamanhoPizza = [
  {
    id: 1,
    tipo: 'Broto',
  },
  {
    id: 2,
    tipo: 'Normal',
  },
  {
    id: 3,
    tipo: 'Gigante',
  },
];

let tipoMassaPizza = [
  {
    id: 1,
    tipo: 'Fina',
  },
  {
    id: 2,
    tipo: 'Tradicional',
  },
  {
    id: 3,
    tipo: 'Grossa',
  },
];

let saborPizza = [
  {
    id: 1,
    nome: 'Margherita',
    descricao:
      'Molho de tomate Italiano, mussarela fatiada, tomate, parmesão, orégano, manjericão e azeitonas verdes sem caroço.',
    valor: 35,
    pontuacao: 45,
    pizzadodia: false,
  },
  {
    id: 2,
    nome: 'Frango com Bacon',
    descricao:
      'Molho de tomate Italiano, frango em cubos, tomate em cubos, mussarela, bacon em cubos, orégano e azeitonas verdes sem caroço.',
    valor: 45,
    pontuacao: 55,
    pizzadodia: false,
  },
  {
    id: 3,
    nome: 'Portuguesa Tradicional',
    descricao:
      'Molho de tomate Italiano, presunto fatiado, ovos, ervilhas, cebola, mussarela, bacon em cubos, orégano e azeitona verdes sem caroço.',
    valor: 50,
    pontuacao: 60,
    pizzadodia: true,
  },
  {
    id: 4,
    nome: 'Contadina',
    descricao:
      'Molho de tomate Italiano, mussarela fatiada, antepasto de berinjela, abobrinha, tomate cereja, gorgonzola, orégano e alho poró.',
    valor: 55,
    pontuacao: 65,
    pizzadodia: false,
  },
  {
    id: 5,
    nome: 'Vercelli ',
    descricao: 'Molho de tomate Italiano, tomate em cubos, cebola, mussarela, bacon, orégano.',
    valor: 70,
    pontuacao: 80,
    pizzadodia: false,
  },
  {
    id: 6,
    nome: 'Fiorella ',
    descricao: 'Molho de tomate Italiano, mussarela fatiada, abobrinha, brie, tomates cereja, parmesão e orégano.',
    valor: 30,
    pontuacao: 40,
    pizzadodia: false,
  },
  {
    id: 7,
    nome: 'Gênova ',
    descricao:
      'Molho de tomate Italiano, presunto, brócolis, requeijão, bacon, orégano, alho frito e azeitonas verdes sem caroço.',
    valor: 50,
    pontuacao: 60,
    pizzadodia: false,
  },
  {
    id: 8,
    nome: 'Calabresa Tradicional ',
    descricao:
      'Molho de tomate Italiano, calabresa defumada, tomate, requeijão, mussarela fatiada, orégano e azeitonas verdes sem caroço.',
    valor: 40,
    pontuacao: 50,
    pizzadodia: false,
  },
];

let bordaRecheada = [
  {
    id: 1,
    tipo: 'Normal',
    valor: 0,
  },
  {
    id: 2,
    tipo: 'Catupiry',
    valor: 10,
  },
  {
    id: 3,
    tipo: 'Requeijão',
    valor: 10,
  },
  {
    id: 4,
    tipo: 'Calabresa',
    valor: 10,
  },
];

const Service = {
  tamanhoListar: async () => {
    return await Promise.resolve({ status: 200, data: { content: tamanhoPizza, success: true, error_message: null } });
  },
  tipoMassaListar: async () => {
    return await Promise.resolve({
      status: 200,
      data: { content: tipoMassaPizza, success: true, error_message: null },
    });
  },
  saborListar: async () => {
    return await Promise.resolve({
      status: 200,
      data: { content: saborPizza, success: true, error_message: null },
    });
  },
  saborBuscar: async (nome) => {
    return await Promise.resolve({
      status: 200,
      data: { content: saborPizza.find((item) => item.nome === nome), success: true, error_message: null },
    });
  },
  bordaListar: async () => {
    return await Promise.resolve({
      status: 200,
      data: { content: bordaRecheada, success: true, error_message: null },
    });
  },
};

export default Service;
