let tamanhoPizza = [
  {
    id: 1,
    value: '1',
    tipo: 'Broto',
  },
  {
    id: 2,
    value: '2',
    tipo: 'Normal',
  },
  {
    id: 3,
    value: '3',
    tipo: 'Gigante',
  },
];

const Service = {
  tamanhoListar: async () => {
    return await Promise.resolve({ status: 200, data: { content: tamanhoPizza, success: true, error_message: null } });
  },
};

export default Service;
