export const Select = {
  baseStyle: {
    field: {
      fontFamily: 'Roboto',
    },
    options: {
      fontFamily: 'Roboto',
      fontWeight: 'normal',
    },
  },
  sizes: {
    md: {
      field: {
        fontSize: '14px',
        height: '40px',
        borderRadius: '2px',
        border: '1px solid',
        borderColor: 'primary.300',
        padding: '0 5px',
        _hover: {
          border: '1px solid',
          borderColor: 'primary.500',
        },
        _focus: {
          border: '1px solid',
          borderColor: 'primary.500',
        },
        _active: {
          border: '1px solid',
          borderColor: 'primary.500',
        },
        _disabled: {
          borderColor: 'gray.500',
          bg: 'gray.200',
        },
      },
    },
  },
  defaultProps: {
    size: 'md',
  },
};

export default Select;
