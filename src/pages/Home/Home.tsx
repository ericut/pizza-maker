//
// componente criado e customizado no chakra.ui
//
import { useEffect, useState } from 'react';
// chakra
import { Box, Flex, Image, Text, Button } from '@chakra-ui/react';
// imagens
import Logo from '../../assets/img/pizzastoom_logo.png';
import BgImage from '../../assets/img/pizza_bg.jpg';
// icones
import { AiFillCrown } from 'react-icons/ai';
// service in promises
import Service from '../../service/userService';

export default function Home(props: any) {
  const [usuario, setUsuario] = useState({ id: Number, name: String, username: String, stoompoints: Number });

  useEffect(() => {
    buscarUsuario('username');
  }, []);

  async function buscarUsuario(username: string) {
    const response = await Service.usuarioBuscar(username);
    if (response.status === 200) {
      //@ts-ignore
      setUsuario(response.data.content);
      //@ts-ignore
      localStorage.setItem('stoom-points', response.data.content.stoompoints + '');
    }
  }

  return (
    <Box
      bgImage={{ lg: BgImage, md: BgImage, sm: '' }}
      w="100%"
      h="100%"
      bgSize="cover"
      boxShadow="lg"
      zIndex="10"
      px="10px"
    >
      <Flex
        w="100%"
        h="100%"
        position="absolute"
        top="0"
        left="0"
        bgGradient="linear(to-tr, rgba(0, 36, 77, 0.75), #003D99)"
        zIndex={0}
      />
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        h="100%"
        w="100%"
        px={{ lg: '15%', md: '5%', sm: '5%' }}
        py={{ lg: '0', md: '15px', sm: '15px' }}
      >
        <Image src={Logo} w="260px" zIndex={1} />
        <Flex color="white" alignItems="center" zIndex={1} fontSize="16px" mt="20px">
          <Text color="orange.500" px="5px">
            <AiFillCrown />
          </Text>
          <Flex fontWeight="bold">Eric Li</Flex>
          <Box h="30px" w="1px" opacity="0.5" bg="white" mx="10px" />
          <Flex alignItems="center">
            <Box border="1px solid" borderColor="orange.600" fontWeight="bold" p="5px" mr="3px" borderRadius="6px">
              {usuario.stoompoints}
            </Box>
            <Text fontSize="12px" color="orange.500">
              StoomPoints
            </Text>
          </Flex>
        </Flex>
        <Button
          my="30px"
          onClick={() =>
            props.history.push('/montesuapizza', {
              params: { pageFrom: '/', usuarioObj: usuario },
            })
          }
        >
          Comece a montar a sua pizza!
        </Button>
      </Flex>
    </Box>
  );
}
