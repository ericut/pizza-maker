import { ReactNode } from 'react';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Checkbox as CheckboxChakra,
  CheckboxProps as ICheckboxPropsChakra,
} from '@chakra-ui/react';

interface IDefaultInputProps {
  label?: string;
  name?: string;
  helperText?: string;
  errorText?: string;
  labelLeft?: boolean;
}

interface ICheckboxProps extends ICheckboxPropsChakra, IDefaultInputProps {
  w?: string;
  children?: ReactNode;
  justifyContent?: string;
}

//
// <Checkbox> componente padrão para textarea
//
export const Checkbox = ({ label, errorText, helperText, labelLeft, w, name, children, justifyContent, ...rest }: ICheckboxProps) => {
  return (
    <FormControl
      marginBottom={labelLeft || !label ? '0px' : '10px'}
      minH={labelLeft || !label ? '' : '60px'}
      padding={labelLeft || !label ? '0px' : '0 10px 0 0'}
      display={labelLeft || !label ? 'flex' : 'block'}
      alignItems={labelLeft || !label ? 'center' : ''}
      justifyContent={justifyContent ? justifyContent : ''}
      w={w}
    >
      {label ? (
        <FormLabel htmlFor={name} fontSize="13px" margin="0 5px">
          {label}
        </FormLabel>
      ) : (
        ''
      )}
      <CheckboxChakra colorScheme="primary" {...rest}>
        {children}
      </CheckboxChakra>
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
