import { useEffect, useState, useMemo } from 'react';
// chakra provider
import { Container, Flex, Heading, Box, Button } from '@chakra-ui/react';
// componentes
import FormWizard from '../../components/MultistepForm/FormWizard';
// icones
import { BsChevronBarRight, BsChevronBarLeft } from 'react-icons/bs';
// step pages
import TamanhoPizza from './Steps/01Tamanho';

export default function MonteSuaPizza() {
  const [pageTitle] = useState('Monte Sua Pizza');
  const [activeStep, setActiveStep] = useState(1);
  const [actualStepLabel, setActualStepLabel] = useState('');

  const [tamanhoPizza, setTamanhoPizza] = useState('');

  const [registeredSteps] = useState([
    { level: 1, label: 'Tamanho da Pizza' },
    { level: 2, label: 'Tipo da Massa' },
    { level: 3, label: 'Sabor da Pizza' },
    { level: 4, label: 'Borda Recheada' },
    { level: 5, label: 'Finalizado' },
  ]);

  useEffect(() => {
    function getLabel() {
      registeredSteps.find(({ level, label }) => {
        if (level === activeStep) {
          setActualStepLabel(label);
        }
        return null;
      });
    }
    getLabel();
  }, [activeStep, registeredSteps]);

  useEffect(() => {
    console.log('tamanho', tamanhoPizza);
  }, [tamanhoPizza]);

  function handlePrevStep() {
    setActiveStep(activeStep - 1);
  }

  function handleNextStep() {
    setActiveStep(activeStep + 1);
  }

  function handleFinalStep() {
    alert('final');
  }

  const stepPizzaRendered = useMemo(() => {
    if (activeStep === 1) {
      return <TamanhoPizza setTamanhoPizza={setTamanhoPizza} />;
    }
  }, [activeStep]);

  return (
    <Container maxW="100%" h="80vh" p="0">
      <Box
        w="100%"
        minH={{ lg: '70vh', md: '70vh', sm: '66vh' }}
        bgGradient="linear(to-tr, white, gray.100)"
        boxShadow="sm"
        px="10px"
      >
        {/* título */}
        <Flex flexDirection="column" alignItems="center" p="25px 0 10px">
          <Heading size="md" fontWeight="bold">
            {pageTitle}
          </Heading>
        </Flex>
        {/* multistep */}
        <Box m="0 auto" py="6px" w="15%" borderBottom="1px solid" borderColor="gray.200"></Box>
        <Flex justifyContent="space-between" pt="15px" px={{ lg: '15%', md: '5%', sm: '5%' }}>
          <Box w={{ lg: '80%', sm: '100%' }} m="0 auto">
            <FormWizard activeStep={activeStep} registeredSteps={registeredSteps} />
          </Box>
        </Flex>
        <Box
          m="0 auto"
          pt="6px"
          w={{ lg: '15%', md: '0%', sm: '0%' }}
          borderBottom="1px solid"
          borderColor="gray.200"
        ></Box>
        {/* sub título */}
        <Flex alignItems="center" justifyContent="center" pt="25px">
          <Flex alignItems="center" color="orange.500">
            <BsChevronBarRight />
          </Flex>
          <Heading color="orange.800" size="sm">
            {actualStepLabel}
          </Heading>
          <Flex alignItems="center" color="orange.500">
            <BsChevronBarLeft />
          </Flex>
        </Flex>
        {/* page render */}
        <Flex pt="30px" px={{ lg: '15%', md: '5%', sm: '2%' }} justifyContent="center">
          {stepPizzaRendered}
        </Flex>
      </Box>
      {/* controles */}
      <Box pt="40px" px={{ lg: '15%', md: '5%', sm: '5%' }}>
        <Flex alignItems="center" justifyContent="space-between">
          {activeStep === 1 ? (
            <Box></Box>
          ) : (
            <Button bg="gray.400" onClick={() => handlePrevStep()}>
              Anterior
            </Button>
          )}
          {registeredSteps.length === activeStep ? (
            <Button onClick={() => handleFinalStep()} bg="green.500">
              Finalizar
            </Button>
          ) : (
            <Button onClick={() => handleNextStep()}>Próximo</Button>
          )}
        </Flex>
      </Box>
    </Container>
  );
}
