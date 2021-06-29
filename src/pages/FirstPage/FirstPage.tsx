import { useEffect, useState } from 'react';
// chakra provider
import { Container, Flex, Heading, Box, Button } from '@chakra-ui/react';
// componentes
import FormWizard, { useWizardSteps } from '../../components/MultistepForm/FormWizard';

export default function MonteSuaPizza(props: any) {
  const { nextStep, previousStep, activeStep } = useWizardSteps({ initialStep: 1 });

  const [pageTitle] = useState('Monte Sua Pizza');

  const [registeredSteps] = useState([
    { level: 1, label: 'Tamanho da Pizza' },
    { level: 2, label: 'Tipo da Massa' },
    { level: 3, label: 'Sabor da Pizza' },
    { level: 4, label: 'Borda Recheada' },
    { level: 5, label: 'Pedido Finalizado' },
  ]);

  useEffect(() => {
    console.log('do something?');
  }, []);

  return (
    <Container maxW="100%" h="100vh" p="0">
      <Box w="100%" h="100px" bgGradient="linear(to-tr, white, gray.100)" boxShadow="sm" px="10px">
        <Flex alignItems="center" justifyContent="space-between" h="100%" px={{ lg: '15%', md: '5%', sm: '5%' }}>
          {/* <Box>
            <Heading size="md">{pageTitle}</Heading>
          </Box> */}
          <Box w="100%">
            <FormWizard activeStep={activeStep} registeredSteps={registeredSteps} />
          </Box>
        </Flex>
      </Box>
      <Box pt="40px" px={{ lg: '15%', md: '5%', sm: '5%' }}>
        <Flex alignItems="center" justifyContent="space-between">
          <Button bg="gray.400" onClick={() => previousStep()}>
            Anterior
          </Button>
          <Button onClick={() => nextStep()}>Próximo</Button>
        </Flex>
      </Box>
    </Container>
  );
}
