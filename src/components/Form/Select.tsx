import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Select as SelectChakra,
  SelectProps as ISelectPropsChakra,
  TypographyProps,
} from '@chakra-ui/react';

interface IDefaultInputProps {
  label?: string;
  name?: string;
  helperText?: string;
  errorText?: string;
  labelLeft?: boolean;
  labelSpace?: any;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isInvalid?: boolean;
  mask?: string;
}

interface ISelectProps extends ISelectPropsChakra, IDefaultInputProps, TypographyProps {
  placeholder?: string;
  options: ISelectPropsOptions[];
  getOptionValue?: (item: any) => any;
  getOptionLabel?: (item: any) => any;
  disablePlaceholder?: boolean;
}

interface ISelectPropsOptions {
  value?: any;
  label?: string;
}

//
// <Select> componente para Select Combo
//
export const Select = ({
  label,
  errorText,
  helperText,
  isRequired,
  isDisabled,
  isReadOnly,
  isInvalid,
  placeholder,
  w,
  name,
  options,
  onChange,
  getOptionValue,
  getOptionLabel,
  disablePlaceholder,
  labelLeft,
  labelSpace,
  ...rest
}: ISelectProps) => {
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
      <FormLabel htmlFor={name} fontSize="13px" margin="0 5px" style={labelSpace ? { whiteSpace: labelSpace } : {}}>
        {label}
      </FormLabel>
      <SelectChakra
        h="40px"
        p={labelLeft || !label ? '0 5px' : '0'}
        name={name}
        id={name}
        errorBorderColor="red.300"
        focusBorderColor="primary.300"
        onChange={onChange}
        {...rest}
      >
        {!disablePlaceholder ? <option value="">{placeholder ? placeholder : 'Selecione uma opção'}</option> : ''}
        {options.map((item) => {
          const optionValue = getOptionValue ? getOptionValue(item) : item.value;
          const optionLabel = getOptionLabel ? getOptionLabel(item) : item.label;
          return (
            <option key={optionValue} value={optionValue}>
              {optionLabel}
            </option>
          );
        })}
      </SelectChakra>
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
