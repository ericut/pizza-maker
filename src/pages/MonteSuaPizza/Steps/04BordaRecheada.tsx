import { useEffect, useState } from 'react';
// chakra provider
import { Flex, useRadio, useRadioGroup, Box, HStack } from '@chakra-ui/react';
// service in promises
import Service from '../../../service/pizzaMenuService.js';

interface IPageProps {
  bordaSelecionado: string;
  setBordaRecheada: (value: string) => void;
}

interface IServiceProps {
  id: number;
  tipo: string;
}

export default function BordaRecheada({ setBordaRecheada, bordaSelecionado }: IPageProps) {
  const [listagemBordaRecheada, setListagemBordaRecheada] = useState<Array<IServiceProps>>([]);

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'boardarecheada-pizza',
    defaultValue: bordaSelecionado || '',
    onChange: selecionarBordaRecheada,
  });
  const radioProvGroup = getRootProps();

  useEffect(() => {
    buscarBordaRecheadaPizza();
  }, []);

  async function buscarBordaRecheadaPizza() {
    const response = await Service.bordaListar();
    if (response.status === 200) {
      setListagemBordaRecheada(response.data.content);
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
      <Box as="label" w={{ lg: '200px', md: '100px', sm: '80px' }} h="100px">
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
                {item.tipo}
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
