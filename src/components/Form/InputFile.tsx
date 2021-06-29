import { FaFile } from 'react-icons/fa';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
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

interface IInputFileProps extends IInputPropsChakra, IDefaultInputProps {
  w?: string;
  acceptedFileTypes?: string;
}

export const InputFile = ({
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
  acceptedFileTypes,
  ...rest
}: IInputFileProps) => {
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
      <InputGroup>
        <InputChakra py="6px" type="file" colorScheme="primary" accept={acceptedFileTypes} name={name} {...rest} />
        <InputRightElement pointerEvents="none" color="gray.400" fontSize="16px" children={<FaFile />} />
      </InputGroup>
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
