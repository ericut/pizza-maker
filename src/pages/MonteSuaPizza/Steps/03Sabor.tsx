import { useEffect, useState } from 'react';
// chakra provider
import { Flex, useRadio, useRadioGroup, Box, HStack, Text } from '@chakra-ui/react';
// icones
import { AiFillCrown } from 'react-icons/ai';
// service in promises
import Service from '../../../service/pizzaMenuService.js';

interface IPageProps {
  saborSelecionado: string;
  setSaborPizza: (value: string) => void;
  setObjSaborSelecionado: any;
  objTamanhoPizzaSelecionado: any;
}

interface IServiceProps {
  id: number;
  nome: string;
  descricao: string;
  valor: number;
  pontuacao: number;
  pizzadodia: boolean;
}

export default function SaborPizza({
  setSaborPizza,
  saborSelecionado,
  setObjSaborSelecionado,
  objTamanhoPizzaSelecionado,
}: IPageProps) {
  const [listagemSabor, setListagemSabor] = useState<Array<IServiceProps>>([]);

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'sabor-pizza',
    defaultValue: saborSelecionado || '',
    onChange: selecionarSabor,
  });
  const radioProvGroup = getRootProps();

  useEffect(() => {
    buscarSaborPizza();
  }, []);

  useEffect(() => {
    buscarSaborEspecifico(saborSelecionado);
  });

  async function buscarSaborPizza() {
    const response = await Service.saborListar();
    if (response.status === 200) {
      setListagemSabor(response.data.content);
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

  const OptionToSelect = (props: any) => {
    const { getInputProps, getCheckboxProps } = useRadio(props);
    const inputProvProps = getInputProps();
    const checkboxProvProps = getCheckboxProps();
    return (
      <Box display="inline-block" as="label" w={{ lg: '420px', md: '220px', sm: '300px' }} m="0 5px 0">
        <input {...inputProvProps} />
        <Flex
          {...checkboxProvProps}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="4px"
          w="100%"
          h="220px"
          bg="white"
          mb="36px"
          justifyContent="center"
          _checked={{
            bg: 'green.500',
            color: 'white',
          }}
          _focus={{
            boxShadow: 'outline',
          }}
          transition="0.5s all"
        >
          {props.children}
        </Flex>
      </Box>
    );
  };

  return (
    <Flex w="100%" alignItems="center" justifyContent="center" pb="40px">
      <HStack textAlign="center" display="inline-block" w="100%" {...radioProvGroup}>
        {listagemSabor.map((item) => {
          let value = item.nome;
          const radio = getRadioProps({ value });
          return (
            <OptionToSelect key={item.id} {...radio}>
              {item.nome === saborSelecionado ? (
                <Flex flexDirection="column" alignItems="center" px="5px" position="relative">
                  <Text bg="green.700" w="90%" mt="-10px" p="5px" fontWeight="bold" mb="5px">
                    {item.pizzadodia ? (
                      <Text mt="-10px" left="5px" bg="orange.900" p="5px" fontWeight="bold" mb="5px">
                        Pizza do dia!
                      </Text>
                    ) : (
                      ''
                    )}
                    {item.nome}
                  </Text>
                  <Text fontSize="15px" pt="5px">
                    {item.descricao}
                  </Text>
                  <Flex
                    alignItems="center"
                    fontSize="20px"
                    position="absolute"
                    fontWeight="bold"
                    left="10px"
                    bottom="10px"
                    bg="green.600"
                    p="2px 10px"
                    border="1px solid"
                    borderColor="orange.600"
                    borderRadius="6px"
                  >
                    <Box color="orange.500">
                      <AiFillCrown />
                    </Box>
                    {item.pizzadodia ? item.pontuacao * 2 : item.pontuacao}
                    <Box fontSize="10px" fontWeight="normal" color="white" pl="5px">
                      {item.pizzadodia ? 'StoomPoints em Dobro!' : 'StoomPoints'}
                    </Box>
                  </Flex>
                  <Flex
                    fontSize="20px"
                    position="absolute"
                    fontWeight="bold"
                    right="10px"
                    bottom="10px"
                    bg="green.700"
                    p="2px 14px"
                    borderRadius="6px"
                  >
                    <Flex
                      fontSize="14px"
                      position="absolute"
                      left="-13px"
                      bg="green.800"
                      borderRadius="full"
                      p="2px 3px"
                    >
                      R$
                    </Flex>
                    {Math.floor(item.valor * objTamanhoPizzaSelecionado.variante)}
                  </Flex>
                </Flex>
              ) : (
                <Flex flexDirection="column" alignItems="center" px="5px" position="relative">
                  <Text bg="orange.600" color="white" w="90%" mt="-10px" p="5px" fontWeight="bold" mb="5px">
                    {item.pizzadodia ? (
                      <Text color="white" mt="-10px" left="5px" bg="orange.900" p="5px" fontWeight="bold" mb="5px">
                        Pizza do dia!
                      </Text>
                    ) : (
                      ''
                    )}
                    {item.nome}
                  </Text>
                  <Text fontSize="15px" pt="5px">
                    {item.descricao}
                  </Text>
                  <Flex
                    alignItems="center"
                    fontSize="20px"
                    position="absolute"
                    fontWeight="bold"
                    left="10px"
                    bottom="10px"
                    p="2px 10px"
                    border="1px solid"
                    borderColor="orange.600"
                    borderRadius="6px"
                  >
                    <Box color="orange.500">
                      <AiFillCrown />
                    </Box>
                    {item.pizzadodia ? item.pontuacao * 2 : item.pontuacao}
                    <Box fontSize="10px" fontWeight="normal" color="orange.500" pl="5px">
                      {item.pizzadodia ? 'StoomPoints em Dobro!' : 'StoomPoints'}
                    </Box>
                  </Flex>
                  <Flex
                    fontSize="20px"
                    position="absolute"
                    fontWeight="bold"
                    right="10px"
                    bottom="10px"
                    bg="gray.200"
                    p="2px 14px"
                    borderRadius="6px"
                  >
                    <Flex
                      fontSize="14px"
                      position="absolute"
                      left="-13px"
                      bg="gray.300"
                      borderRadius="full"
                      p="2px 3px"
                    >
                      R$
                    </Flex>
                    {Math.floor(item.valor * objTamanhoPizzaSelecionado.variante)}
                  </Flex>
                </Flex>
              )}
            </OptionToSelect>
          );
        })}
      </HStack>
    </Flex>
  );
}
