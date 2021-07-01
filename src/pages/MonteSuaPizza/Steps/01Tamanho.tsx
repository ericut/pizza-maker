import { useEffect, useState } from 'react';
// chakra provider
import { Flex, useRadio, useRadioGroup, Box, HStack } from '@chakra-ui/react';
// service in promises
import Service from '../../../service/pizzaMenuService.js';

interface IPageProps {
  tamanhoPizzaSelecionado: string;
  setTamanhoPizza: (value: string) => void;
  setObjTamanhoPizzaSelecionado: any;
}

interface IServiceProps {
  id: number;
  tipo: string;
}

export default function TamanhoPizza({
  setTamanhoPizza,
  tamanhoPizzaSelecionado,
  setObjTamanhoPizzaSelecionado,
}: IPageProps) {
  const [listagemTamanho, setListagemTamanho] = useState<Array<IServiceProps>>([]);

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'tamanho-pizza',
    defaultValue: tamanhoPizzaSelecionado || '',
    onChange: selecionarTamanho,
  });
  const radioProvGroup = getRootProps();

  useEffect(() => {
    buscarTamanhoPizza();
  }, []);

  useEffect(() => {
    buscarTamanhoEspecifico(tamanhoPizzaSelecionado);
  });

  async function buscarTamanhoPizza() {
    const response = await Service.tamanhoListar();
    if (response.status === 200) {
      setListagemTamanho(response.data.content);
    }
  }

  async function buscarTamanhoEspecifico(tipo: string) {
    const response = await Service.tamanhoBuscar(tipo);
    if (response.status === 200) {
      setObjTamanhoPizzaSelecionado(response.data.content);
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
