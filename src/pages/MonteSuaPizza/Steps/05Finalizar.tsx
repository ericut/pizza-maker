import { useEffect, useState } from 'react';
// chakra provider
import { Flex, Text, Box } from '@chakra-ui/react';
// icones
import { GiFullPizza } from 'react-icons/gi';
import { BiCheckCircle } from 'react-icons/bi';
import { AiFillCrown } from 'react-icons/ai';

interface IPageProps {
  objTamanhoPizzaSelecionado: any;
  objSaborSelecionado: any;
  objBordaSelecionado: any;
  tipoMassaPizza: any;
  setPizzaCompleta: any;
}

interface IPizzaProps {
  tamanho: string;
  massa: string;
  sabor: string;
  borda: string;
  pizzadodia: boolean;
  valorsabor: number;
  valorborda: number;
  valortotal: number;
  pontuacao: number;
}

export default function FinalizarPizza({
  objTamanhoPizzaSelecionado,
  objSaborSelecionado,
  objBordaSelecionado,
  tipoMassaPizza,
  setPizzaCompleta,
}: IPageProps) {
  const [pizzaMontada, setPizzaMontada] = useState<IPizzaProps>({
    tamanho: '',
    massa: '',
    sabor: '',
    borda: '',
    pizzadodia: false,
    valorsabor: 0,
    valorborda: 0,
    valortotal: 0,
    pontuacao: 0,
  });

  useEffect(() => {
    montarPizza();
    // eslint-disable-next-line
  }, [objTamanhoPizzaSelecionado, objSaborSelecionado, objBordaSelecionado, tipoMassaPizza, setPizzaCompleta]);

  function montarPizza() {
    let objPizza = {
      tamanho: objTamanhoPizzaSelecionado.tipo,
      massa: tipoMassaPizza,
      sabor: objSaborSelecionado.nome,
      borda: objBordaSelecionado ? objBordaSelecionado.tipo : 'Normal',
      pizzadodia: objSaborSelecionado.pizzadodia,
      valorsabor: Math.floor(objSaborSelecionado.valor * objTamanhoPizzaSelecionado.variante),
      valorborda: objBordaSelecionado ? objBordaSelecionado.valor : 0,
      valortotal:
        Math.floor(objSaborSelecionado.valor * objTamanhoPizzaSelecionado.variante) +
        (objBordaSelecionado ? objBordaSelecionado.valor : 0),
      pontuacao: objSaborSelecionado.pizzadodia ? objSaborSelecionado.pontuacao * 2 : objSaborSelecionado.pontuacao,
    };
    setPizzaMontada(objPizza);
    setPizzaCompleta(objPizza);
  }

  return (
    <Flex w="100%" justifyContent="center" pb="50px">
      <Flex color="gray.200" w="30%" justifyContent="flex-end" px="20px">
        <GiFullPizza fontSize="240px" />
      </Flex>
      <Box w="40%" px="20px">
        <Text fontSize="16px" fontWeight="bold" pb="10px">
          Confirme se esta é a sua Pizza:
        </Text>
        <Flex fontSize="14px" alignItems="center" borderBottom="1px dotted" borderColor="gray.400">
          <Text pr="5px" color="green.500">
            <BiCheckCircle />
          </Text>
          <Text>Tamanho:</Text>
          <Text fontWeight="bold" pl="5px">
            {pizzaMontada.tamanho}
          </Text>
        </Flex>
        <Flex fontSize="14px" alignItems="center" borderBottom="1px dotted" borderColor="gray.400">
          <Text pr="5px" color="green.500">
            <BiCheckCircle />
          </Text>
          <Text>Tipo da Massa:</Text>
          <Text fontWeight="bold" pl="5px">
            {pizzaMontada.massa}
          </Text>
        </Flex>
        <Flex
          fontSize="14px"
          alignItems="center"
          justifyContent="space-between"
          borderBottom="1px dotted"
          borderColor="gray.400"
          py="2px"
        >
          <Flex alignItems="center">
            <Text pr="5px" color="green.500">
              <BiCheckCircle />
            </Text>
            <Text>Sabor:</Text>
            <Text fontWeight="bold" pl="5px">
              {pizzaMontada.sabor}
            </Text>
          </Flex>
          <Box fontWeight="bold">R$ {pizzaMontada.valorsabor}</Box>
        </Flex>
        <Flex
          fontSize="14px"
          alignItems="center"
          justifyContent="space-between"
          borderBottom="1px dotted"
          borderColor="gray.600"
          py="2px"
        >
          <Flex alignItems="center">
            <Text pr="5px" color="green.500">
              <BiCheckCircle />
            </Text>
            <Text>Borda:</Text>
            <Text fontWeight="bold" pl="5px">
              {pizzaMontada.borda}
            </Text>
          </Flex>
          <Box fontWeight="bold">R$ {pizzaMontada.valorborda}</Box>
        </Flex>
        <Flex fontSize="12px" alignItems="center" justifyContent="space-between" py="2px">
          <Flex alignItems="center">
            <Text pr="5px" color="transparent">
              <BiCheckCircle />
            </Text>
            <Text textTransform="uppercase">Valor final</Text>
          </Flex>
          <Box fontWeight="black" fontSize="18px">
            R$ {pizzaMontada.valortotal}
          </Box>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="center"
          fontSize="20px"
          fontWeight="bold"
          p="2px 10px"
          mt="20px"
          border="1px solid"
          borderColor="orange.600"
          borderRadius="6px"
        >
          <Box fontSize="12px" fontWeight="normal" color="orange.500" pr="5px">
            Você Ganhará
          </Box>
          <Box color="orange.500">
            <AiFillCrown />
          </Box>
          {pizzaMontada.pontuacao}
          <Box fontSize="12px" fontWeight="normal" color="orange.500" pl="5px">
            StoomPoints
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
