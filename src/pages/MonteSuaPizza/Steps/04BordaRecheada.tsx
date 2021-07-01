import { useEffect, useState } from 'react';
// chakra provider
import { Flex, useRadio, useRadioGroup, Box, HStack, Text } from '@chakra-ui/react';
// service in promises
import Service from '../../../service/pizzaMenuService.js';

interface IPageProps {
  bordaSelecionado: string;
  setBordaRecheada: (value: string) => void;
  setObjBordaSelecionado: any;
}

interface IServiceProps {
  id: number;
  tipo: string;
  valor: number;
}

export default function BordaRecheada({ setBordaRecheada, bordaSelecionado, setObjBordaSelecionado }: IPageProps) {
  const [listagemBordaRecheada, setListagemBordaRecheada] = useState<Array<IServiceProps>>([]);

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'boardarecheada-pizza',
    defaultValue: bordaSelecionado || 'Normal',
    onChange: selecionarBordaRecheada,
  });
  const radioProvGroup = getRootProps();

  useEffect(() => {
    buscarBordaRecheadaPizza();
  }, []);

  useEffect(() => {
    buscarBordaEspecifico(bordaSelecionado);
  });

  async function buscarBordaRecheadaPizza() {
    const response = await Service.bordaListar();
    if (response.status === 200) {
      setListagemBordaRecheada(response.data.content);
    }
  }

  async function buscarBordaEspecifico(tipo: string) {
    const response = await Service.bordaBuscar(tipo);
    if (response.status === 200) {
      setObjBordaSelecionado(response.data.content);
    }
  }

  function selecionarBordaRecheada(value: string) {
    setBordaRecheada(value);
  }

  const OptionToSelect = (props: any) => {
    const { getInputProps, getCheckboxProps } = useRadio(props);
    const inputProvProps = getInputProps();
    const checkboxProvProps = getCheckboxProps();
    return (
      <Box as="label" w={{ lg: '200px', md: '100px', sm: '80px' }} h="100px" m="0 5px 0">
        <input {...inputProvProps} />
        <Flex
          {...checkboxProvProps}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="4px"
          w="100%"
          h="100%"
          bg="white"
          alignItems="center"
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
    <Box>
      <Flex w="100%" alignItems="center" justifyContent="space-between">
        <HStack justifyContent="center" w="100%" {...radioProvGroup}>
          {listagemBordaRecheada.map((item) => {
            let value = item.tipo;
            const radio = getRadioProps({ value });
            return (
              <OptionToSelect key={item.id} {...radio}>
                {item.tipo === bordaSelecionado ? (
                  <Flex justifyContent="center" w="100%" px="5px" position="relative">
                    <Text w="90%" p="5px" fontWeight="bold" mb="5px">
                      {item.tipo}
                    </Text>
                    <Flex
                      fontSize="20px"
                      position="absolute"
                      fontWeight="bold"
                      right="10px"
                      bottom="6px"
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
                      {item.valor}
                    </Flex>
                  </Flex>
                ) : (
                  <Flex justifyContent="center" w="100%" px="5px" position="relative">
                    <Text w="90%" p="5px" fontWeight="bold" mb="5px">
                      {item.tipo}
                    </Text>
                    <Flex
                      fontSize="20px"
                      position="absolute"
                      fontWeight="bold"
                      right="10px"
                      bottom="6px"
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
                      {item.valor}
                    </Flex>
                  </Flex>
                )}
              </OptionToSelect>
            );
          })}
        </HStack>
      </Flex>
      <Flex justifyContent="center" pt="30px" fontSize="12px">
        * Borda recheada é opcional.
      </Flex>
    </Box>
  );
}
