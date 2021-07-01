let usuarios = [
  {
    id: 1,
    username: 'username',
    nome: 'Eric Li',
    stoompoints: 0,
  },
];

const Service = {
  usuarioListar: async () => {
    return await Promise.resolve({
      status: 200,
      data: { content: usuarios, success: true, error_message: null },
    });
  },
  usuarioBuscar: async (username) => {
    return await Promise.resolve({
      status: 200,
      data: { content: usuarios.find((item) => item.username === username), success: true, error_message: null },
    });
  },
  usuarioCadastrar: async (item) => {
    if (item.id) {
      usuarios.map((novoItem) => {
        if (novoItem.id === item.id) {
          novoItem.id = item.id;
          novoItem.username = item.username;
          novoItem.nome = item.nome;
          novoItem.stoompoints = item.stoompoints;
        }
        return null;
      });
    } else {
      item.id = usuarios.length + 1;
      usuarios.push(item);
    }
    return await Promise.resolve({
      status: 200,
      data: { content: usuarios.find((i) => i.id === item.id), success: true, error_message: null },
    });
  },
};

export default Service;
