import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Textarea as TextAreaChakra,
  TextareaProps as ITextAreaPropsChakra,
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

interface ITextAreaProps extends ITextAreaPropsChakra, IDefaultInputProps {
  w?: string;
}

//
// <TextArea> componente padrão para textarea
//
export const TextArea = ({
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
}: ITextAreaProps) => {
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
      <TextAreaChakra
        fontSize="14px"
        borderRadius="2px"
        errorBorderColor="red.300"
        focusBorderColor="primary.300"
        p={labelLeft || !label ? '5px 5px' : '5px 10px'}
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
