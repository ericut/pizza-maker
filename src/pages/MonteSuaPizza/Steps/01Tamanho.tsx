import { useEffect, useState } from 'react';
// chakra provider
import { Flex, useRadio, useRadioGroup, Box, HStack } from '@chakra-ui/react';
// service in promises
import Service from '../../../service/pizzaMenuService.js';

interface ITamanhoPageProps {
  setTamanhoPizza: (value: string) => void;
}

interface ITamanhoProps {
  id: number;
  value: string;
  tipo: string;
}

export default function TamanhoPizza({ setTamanhoPizza }: ITamanhoPageProps) {
  const [listagemTamanho, setListagemTamanho] = useState<Array<ITamanhoProps>>([]);

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'tamanho-pizza',
    defaultValue: '',
    onChange: selecionarTamanho,
  });
  const radioProvGroup = getRootProps();

  useEffect(() => {
    buscarTamanhoPizza();
  }, []);

  async function buscarTamanhoPizza() {
    const response = await Service.tamanhoListar();
    if (response.status === 200) {
      setListagemTamanho(response.data.content);
    }
  }

  function selecionarTamanho(value: string) {
    setTamanhoPizza(value);
  }

  const OptionToSelect = (props: any) => {
    const { getInputProps, getCheckboxProps } = useRadio(props);
    const inputProvProps = getInputProps();
    const checkboxProvProps = getCheckboxProps();
    return (
      <Box as="label" w={{ lg: '200px', md: '100px', sm: '30%' }} h="100px">
        <input {...inputProvProps} />
        <Flex
          {...checkboxProvProps}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="2px"
          w="100%"
          h="100%"
          alignItems="center"
          justifyContent="center"
          _checked={{
            bg: 'orange.500',
            color: 'white',
            borderColor: 'orange.500',
          }}
          _focus={{
            boxShadow: 'outline',
          }}
        >
          {props.children}
        </Flex>
      </Box>
    );
  };

  return (
    <Flex w="100%" alignItems="center" justifyContent="space-between">
      <HStack justifyContent="center" w="100%" {...radioProvGroup}>
        {listagemTamanho.map((item) => {
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
  );
}
