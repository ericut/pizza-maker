import { useEffect, useState, useMemo } from 'react';
// chakra provider
import { Container, Flex, Heading, Box, Button, HStack, useToast } from '@chakra-ui/react';
// componentes
import FormWizard from '../../components/MultistepForm/FormWizard';
// icones
import { BsChevronBarRight, BsChevronBarLeft } from 'react-icons/bs';
// step pages
import TamanhoPizza from './Steps/01Tamanho';
import TipoMassaPizza from './Steps/02TipoMassa';
import SaborPizza from './Steps/03Sabor';
import BordaRecheada from './Steps/04BordaRecheada';

export default function MonteSuaPizza() {
  const toast = useToast();
  const [pageTitle] = useState('Monte Sua Pizza');
  const [activeStep, setActiveStep] = useState(1);
  const [actualStepLabel, setActualStepLabel] = useState('');

  const [objSaborSelecionado, setObjSaborSelecionado] = useState({});

  const [tamanhoPizza, setTamanhoPizza] = useState('');
  const [tipoMassaPizza, setTipoMassaPizza] = useState('');
  const [saborPizza, setSaborPizza] = useState('');
  const [bordaRecheada, setBordaRecheada] = useState('');

  const [registeredSteps] = useState([
    { level: 1, label: 'Tamanho da Pizza' },
    { level: 2, label: 'Tipo da Massa' },
    { level: 3, label: 'Sabor da Pizza' },
    { level: 4, label: 'Borda Recheada' },
    { level: 5, label: 'Finalizar' },
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
    console.log('OBJ', objSaborSelecionado);
  }, [objSaborSelecionado]);

  function handlePrevStep() {
    setActiveStep(activeStep - 1);
  }

  function handleNextStep() {
    if (activeStep === 1) {
      if (tamanhoPizza) {
        setActiveStep(activeStep + 1);
      } else {
        toast({
          status: 'warning',
          title: 'Por favor, selecione o tamanho da pizza!',
          isClosable: true,
          duration: 3000,
        });
      }
    } else if (activeStep === 2) {
      if (tipoMassaPizza) {
        setActiveStep(activeStep + 1);
      } else {
        toast({
          status: 'warning',
          title: 'Por favor, selecione o tipo da massa!',
          isClosable: true,
          duration: 3000,
        });
      }
    } else if (activeStep === 3) {
      if (saborPizza) {
        setActiveStep(activeStep + 1);
      } else {
        toast({
          status: 'warning',
          title: 'Por favor, selecione o sabor da sua pizza!',
          isClosable: true,
          duration: 3000,
        });
      }
    } else if (activeStep === 4) {
      setActiveStep(activeStep + 1);
    }
  }

  function handleFinalStep() {
    alert('final');
  }

  const stepPizzaRendered = useMemo(() => {
    switch (activeStep) {
      case 1:
        return <TamanhoPizza setTamanhoPizza={setTamanhoPizza} tamanhoPizzaSelecionado={tamanhoPizza} />;
      case 2:
        return <TipoMassaPizza setTipoMassaPizza={setTipoMassaPizza} tipoMassaSelecionado={tipoMassaPizza} />;
      case 3:
        return (
          <SaborPizza
            setSaborPizza={setSaborPizza}
            saborSelecionado={saborPizza}
            setObjSaborSelecionado={setObjSaborSelecionado}
          />
        );
      case 4:
        return <BordaRecheada setBordaRecheada={setBordaRecheada} bordaSelecionado={bordaRecheada} />;
    }
  }, [activeStep, tamanhoPizza, tipoMassaPizza, saborPizza, bordaRecheada]);

  return (
    <Container maxW="100%" h="80vh" p="0 0 20px 0">
      <Flex
        justifyContent="center"
        bg="orange.500"
        color="white"
        fontSize="14px"
        letterSpacing="-0.2px"
        transition="1s all"
      >
        <HStack>
          {tamanhoPizza ? (
            <Box p="4px 6px" bg="orange.800">
              Tamanho: {tamanhoPizza}
            </Box>
          ) : (
            ''
          )}
          {tipoMassaPizza ? (
            <Box p="4px 6px" bg="orange.800">
              Massa: {tipoMassaPizza}
            </Box>
          ) : (
            ''
          )}
          {saborPizza ? (
            <Box p="4px 6px" bg="orange.800">
              Sabor: {saborPizza}
            </Box>
          ) : (
            ''
          )}
          {bordaRecheada ? (
            <Box p="4px 6px" bg="orange.800">
              Borda: {bordaRecheada}
            </Box>
          ) : (
            ''
          )}
        </HStack>
      </Flex>
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
      <Box pt="20px" pb="30px" px={{ lg: '15%', md: '5%', sm: '5%' }}>
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
              Finalizar Pedido
            </Button>
          ) : (
            <Button onClick={() => handleNextStep()}>Próximo</Button>
          )}
        </Flex>
      </Box>
    </Container>
  );
}
