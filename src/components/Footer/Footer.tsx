//
// componente criado e customizado no chakra.ui
//
import { Box, Flex, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box w="100%" mb="80px" px="20px">
      <Flex alignItems="center" justifyContent="space-between" px="70px">
        <Flex />
        <Text fontSize="12px" color="gray.500">
          • Pizza Stoom •
        </Text>
      </Flex>
    </Box>
  );
}
