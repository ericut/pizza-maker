import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInput as NumberInputChakra,
  NumberInputProps as INumberInputPropsChakra,
} from '@chakra-ui/react';

interface IDefaultInputProps {
  label?: string;
  name?: string;
  helperText?: string;
  errorText?: string;
  labelLeft?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isInvalid?: boolean;
  mask?: string;
}

interface INumberInputProps extends INumberInputPropsChakra, IDefaultInputProps {
  w?: string;
  inputStepper?: boolean;
}

//
// <NumberInput> componente padrão para input
//
export const NumberInput = ({
  label,
  errorText,
  helperText,
  as,
  isRequired,
  isDisabled,
  isReadOnly,
  isInvalid,
  placeholder,
  w,
  name,
  labelLeft,
  inputStepper,
  children,
  ...rest
}: INumberInputProps) => {
  // previne a tecla E no <NumberInput>
  function preventKeyE(e: any) {
    if (e.charCode === 69 || e.charCode === 101) {
      e.preventDefault();
    }
  }
  return (
    <FormControl
      isRequired={isRequired}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isInvalid={isInvalid}
      marginBottom={labelLeft || !label ? '0px' : '10px'}
      w={w}
      minH={labelLeft || !label ? '' : '60px'}
      padding={labelLeft || !label ? '0px' : '0 10px 0 0'}
      display={labelLeft || !label ? 'flex' : 'block'}
      alignItems={labelLeft || !label ? 'center' : ''}
    >
      {label ? (
        <FormLabel htmlFor={name} fontSize="13px" margin="0 5px">
          {label}
        </FormLabel>
      ) : (
        ''
      )}
      <NumberInputChakra
        name={name}
        id={name}
        errorBorderColor="red.300"
        focusBorderColor="primary.300"
        p={labelLeft || !label ? '0 0px' : '0 10px'}
        onKeyPress={(e) => preventKeyE(e)}
        {...rest}
      >
        {children}
        <NumberInputField />
        {inputStepper ? (
          <NumberInputStepper w="10px" right="7px">
            <NumberIncrementStepper border="none" fontSize="7px" />
            <NumberDecrementStepper border="none" fontSize="7px" />
          </NumberInputStepper>
        ) : (
          ''
        )}
      </NumberInputChakra>
      {errorText ? (
        <FormErrorMessage fontSize="11px" position="absolute" right="15px" marginTop="1px">
          {errorText}
        </FormErrorMessage>
      ) : (
        ''
      )}
      {helperText ? (
        <FormHelperText fontSize="11px" position="absolute" left="10px" marginTop="1px">
          {helperText}
        </FormHelperText>
      ) : (
        ''
      )}
    </FormControl>
  );
};
