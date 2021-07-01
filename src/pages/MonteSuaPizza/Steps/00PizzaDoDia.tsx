import { useEffect, useState } from 'react';
// chakra provider
import { Flex, Box, Button, Text } from '@chakra-ui/react';
// icones
import { AiFillCrown } from 'react-icons/ai';
// service in promises
import Service from '../../../service/pizzaMenuService.js';

interface IPageProps {
  saborSelecionado: string;
  setSaborPizza: (value: string) => void;
  setObjSaborSelecionado: any;
  objTamanhoPizzaSelecionado: any;
  activeStep: number;
}

interface IServiceProps {
  id: number;
  nome: string;
  descricao: string;
  valor: number;
  pontuacao: number;
  pizzadodia: boolean;
}

interface IServiceSecProps {
  id: number;
  tipo: string;
  variante: number;
}

export default function PizzaDoDia({
  setSaborPizza,
  saborSelecionado,
  setObjSaborSelecionado,
  activeStep,
}: IPageProps) {
  const [pizzaDoDia, setPizzaDoDia] = useState<IServiceProps | undefined>({
    id: 0,
    nome: '',
    descricao: '',
    valor: 0,
    pontuacao: 0,
    pizzadodia: true,
  });
  const [listagemTamanho, setListagemTamanho] = useState<Array<IServiceSecProps>>([]);

  useEffect(() => {
    buscarSaborEspecifico(saborSelecionado);
  });

  useEffect(() => {
    buscarTamanhoPizza();
  }, []);

  useEffect(() => {
    buscarPizzaDoDia();
  });

  async function buscarTamanhoPizza() {
    const response = await Service.tamanhoListar();
    if (response.status === 200) {
      setListagemTamanho(response.data.content);
    }
  }

  async function buscarPizzaDoDia() {
    const response = await Service.saborDoDiaBuscar();
    if (response.status === 200) {
      setPizzaDoDia(response.data.content);
    }
  }

  async function buscarSaborEspecifico(nome: string) {
    const response = await Service.saborBuscar(nome);
    if (response.status === 200) {
      setObjSaborSelecionado(response.data.content);
    }
  }

  function selecionarSabor(value: string) {
    setSaborPizza(value);
  }

  return pizzaDoDia ? (
    <Flex w="100%" alignItems="center" justifyContent="center" bg="primary.600" p="5px">
      <Flex flexDirection={{ lg: 'row', md: 'row', sm: 'column' }} alignItems="center" px="5px" position="relative">
        <Text bg="orange.600" color="white" fontWeight="bold" p="5px">
          Pizza Do Dia!!
        </Text>
        <Text color="white" fontWeight="bold" px="10px">
          {pizzaDoDia.nome}
        </Text>
        <Flex>
          {listagemTamanho.map((item) => {
            return (
              <Box key={item.id} fontSize="14px" color="yellow" pr="10px" borderRadius="6px">
                {item.tipo}
                <Text fontWeight="bold" pl="3px">
                  R$ {pizzaDoDia.valor * item.variante}
                </Text>
              </Box>
            );
          })}
        </Flex>
        <Flex
          alignItems="center"
          fontSize="20px"
          fontWeight="bold"
          p="2px 10px"
          border="1px solid"
          borderColor="orange.600"
          borderRadius="6px"
          color="white"
        >
          <Text fontSize="10px" pr="5px">
            Ganhe o Dobro!
          </Text>
          <Box color="orange.500">
            <AiFillCrown />
          </Box>
          {pizzaDoDia.pontuacao * 2}
          <Box fontSize="10px" fontWeight="normal" color="white" pl="5px">
            StoomPoints
          </Box>
        </Flex>
        {activeStep !== 3 ? (
          <Button size="sm" ml="20px" bg="primary.800" onClick={() => selecionarSabor(pizzaDoDia.nome)}>
            Eu Quero!!!
          </Button>
        ) : (
          ''
        )}
      </Flex>
    </Flex>
  ) : (
    <></>
  );
}
