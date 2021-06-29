import { Flex, Text, Box, TextProps } from '@chakra-ui/react';

interface IInfoTextProps extends TextProps {
  value?: any;
  label: string;
  w?: string;
}
//
// MARCAÇÃO DE TEXTO SOMENTE
// <InfoText> componente para informações EM TEXTO
//
export const InfoText = ({ label, w, value, ...rest }: IInfoTextProps) => {
  return (
    <Box role="group" marginBottom="10px" w={w} padding="0 10px 0 0" minH="60px">
      <Flex fontSize="13px" margin="0 5px">
        {label}
      </Flex>
      <Flex
        _groupHover={{ borderBottomColor: 'gray.200' }}
        h="40px"
        p="0 10px"
        borderBottom="1px solid"
        borderBottomColor="gray.100"
        borderRadius="2px"
        alignItems="center"
        fontSize="14px"
        lineHeight="14px"
        {...rest}
      >
        <Text>{value}</Text>
      </Flex>
    </Box>
  );
};
