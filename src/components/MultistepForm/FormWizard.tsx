//
// componente criado e customizado no chakra.ui
//
import { useEffect, useState } from 'react';
import { Flex, Box } from '@chakra-ui/react';

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

  const maxRegisteredSteps = registeredSteps.length;
  const finishedSteps = registeredSteps.length + 1;

  useEffect(() => {
    setActiveStepChange(activeStep);
  }, [activeStep]);

  function stepGoToStep(level: number) {
    setActiveStepChange(level);
  }

  function stepColorStatus(level: number) {
    if (level === activeStepChange) {
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
    if (level === activeStepChange - 1) {
      return 'linear(to-r, green.500, orange.500)';
    } else if (level === activeStepChange) {
      return 'linear(to-r, orange.500, primary.50)';
    } else if (level < activeStepChange) {
      return 'linear(to-r, green.500, green.500)';
    } else if (level > activeStepChange) {
      return 'linear(to-r, primary.50, primary.50)';
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
                onClick={() => stepGoToStep(level)}
              >
                <Box h="1px"></Box>
                <Box w="18px" h="18px" bg={stepColorStatus(level)} borderRadius="full" transition="0.5s all"></Box>
                <Box h="26px" fontSize="12px">
                  {label}
                </Box>
              </Flex>
              {level !== registeredSteps[registeredSteps.length - 1].level ? (
                <Box w="100%" mt="-25px" h="6px" bgGradient={stepColorBar(level)} transition="0.5s all"></Box>
              ) : (
                ''
              )}
            </>
          );
        })}
    </Flex>
  );
}
