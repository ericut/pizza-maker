export const Input = {
  baseStyle: {
    field: {
      fontFamily: 'Roboto',
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
        padding: '0 10px',
        background: 'white',
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

export const Textarea = {
  baseStyle: {
    field: {
      fontFamily: 'Roboto',
      fontSize: '14px',
      borderRadius: '2px',
      border: '1px solid',
      borderColor: 'primary.300',
      padding: '0 10px',
      background: 'white',
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
};

export const NumberInput = {
  baseStyle: {
    field: {
      fontFamily: 'Roboto',
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
