import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input as InputChakra,
  InputProps as IInputPropsChakra,
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

interface IInputProps extends IInputPropsChakra, IDefaultInputProps {
  w?: string;
}

//
// <Input> componente padrão para input
//
export const Input = ({
  label,
  errorText,
  helperText,
  isRequired,
  isDisabled,
  isReadOnly,
  isInvalid,
  placeholder,
  labelLeft,
  w,
  mask,
  name,
  ...rest
}: IInputProps) => {
  return (
    <FormControl
      isRequired={isRequired}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isInvalid={isInvalid}
      marginBottom={labelLeft || !label ? '0px' : '10px'}
      minH={labelLeft || !label ? '' : '60px'}
      padding={labelLeft || !label ? '0px' : '0 10px 0 0'}
      display={labelLeft || !label ? 'flex' : 'block'}
      alignItems={labelLeft || !label ? 'center' : ''}
      w={w}
    >
      {label ? (
        <FormLabel htmlFor={name} fontSize="13px" margin="0 5px">
          {label}
        </FormLabel>
      ) : (
        ''
      )}
      <InputChakra
        errorBorderColor="red.300"
        focusBorderColor="primary.300"
        p={labelLeft || !label ? '0 5px' : '0 10px'}
        {...rest}
      />
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
