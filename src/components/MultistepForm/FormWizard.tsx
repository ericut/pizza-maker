//
// componente criado e customizado no chakra.ui
//
import { useEffect, useState } from 'react';
import { Flex, Box } from '@chakra-ui/react';
// icones
import { FaCheck } from 'react-icons/fa';
import { AiFillCrown } from 'react-icons/ai';

interface IFormWizardProps {
  registeredSteps: Array<any>;
  activeStep: number;
}

interface IStepsControlProps {
  initialStep: number;
}

export function useWizardSteps({ initialStep }: IStepsControlProps) {
  const [activeStep, setActiveStep] = useState(initialStep);
  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };
  const previousStep = () => {
    setActiveStep(activeStep - 1);
  };
  const resetSteps = () => {
    setActiveStep(initialStep);
  };
  return { nextStep, previousStep, resetSteps, activeStep };
}

export default function FormWizard({ registeredSteps, activeStep }: IFormWizardProps) {
  const [activeStepChange, setActiveStepChange] = useState(activeStep);

  const maxRegisteredStep = registeredSteps.length;
  const finishedSteps = registeredSteps.length + 1;

  useEffect(() => {
    setActiveStepChange(activeStep);
  }, [activeStep]);

  function stepColorStatus(level: number) {
    if (activeStepChange === maxRegisteredStep) {
      return 'green.500';
    } else if (level === activeStepChange) {
      return 'orange.500';
    } else if (level > activeStepChange) {
      return 'primary.100';
    } else if (level < activeStepChange) {
      return 'green.500';
    } else if (activeStepChange === finishedSteps) {
      return 'green.500';
    }
  }

  function stepColorBar(level: number) {
    if (activeStepChange === maxRegisteredStep) {
      return 'green.500';
    } else if (level === activeStepChange - 1) {
      return 'orange.500';
    } else if (level === activeStepChange) {
      return 'orange.100';
    } else if (level < activeStepChange) {
      return 'green.500';
    } else if (level > activeStepChange) {
      return 'primary.50';
    }
  }

  return (
    <Flex alignItems="center" position="relative" justifyContent="space-between" w="100%" color="primary.900">
      {registeredSteps
        .sort((a, b) => {
          if (a.level > b.level) {
            return 1;
          } else if (a.level < b.level) {
            return -1;
          } else {
            return 0;
          }
        })
        .map(({ level, label }) => {
          return (
            <>
              <Flex
                key={level}
                flexDirection="column"
                alignItems="center"
                position="relative"
                textAlign="center"
                w="300px"
              >
                <Box h="1px"></Box>
                {level < activeStep ? (
                  <Flex w="20px" h="20px" color="white" alignItems="center" justifyContent="center">
                    <Flex
                      w="20px"
                      h="20px"
                      alignItems="center"
                      justifyContent="center"
                      bg={stepColorStatus(level)}
                      borderRadius="full"
                      transition="0.5s all"
                      fontSize="12px"
                      color="white"
                    >
                      <FaCheck />
                    </Flex>
                  </Flex>
                ) : activeStep === maxRegisteredStep ? (
                  <Flex w="20px" h="20px" color="white" alignItems="center" justifyContent="center">
                    <Flex
                      w="20px"
                      h="20px"
                      alignItems="center"
                      justifyContent="center"
                      bg={stepColorStatus(level)}
                      borderRadius="full"
                      transition="0.5s all"
                    >
                      <AiFillCrown />
                    </Flex>
                  </Flex>
                ) : (
                  <Flex w="20px" h="20px" color="white" alignItems="center" justifyContent="center">
                    <Flex
                      w="18px"
                      h="18px"
                      bg={stepColorStatus(level)}
                      borderRadius="full"
                      transition="0.5s all"
                    ></Flex>
                  </Flex>
                )}
                <Box h="26px" fontSize="12px" transition="0.5s all" fontWeight={activeStep === level ? 'bold' : ''}>
                  {label}
                </Box>
              </Flex>
              {level !== registeredSteps[registeredSteps.length - 1].level ? (
                <Box
                  w="35%"
                  mt="-25px"
                  h="6px"
                  borderTop="6px dotted"
                  borderColor={stepColorBar(level)}
                  transition="0.5s all"
                ></Box>
              ) : (
                ''
              )}
            </>
          );
        })}
    </Flex>
  );
}
