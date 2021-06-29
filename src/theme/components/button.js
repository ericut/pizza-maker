const Button = {
  baseStyle: {
    color: 'primary.900',
    fontFamily: 'Roboto',
  },
  sizes: {
    md: {
      fontSize: '16px',
      fontWeight: 'bold',
      padding: '0px 30px',
      height: '50px',
      borderRadius: '6px',
      boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.05)',
    },
  },
  variants: {
    solid: (props) => ({
      color: 'white',
      bg: props.bg ? props.bg : 'primary.500',
      _hover: {
        bg: props.bg ? props.bg : 'primary.400',
        opacity: 1,
        boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.25)',
      },
      _active: {
        bg: props.bg ? props.bg : 'primary.600',
        opacity: 0.9,
      },
      _focus: {
        boxShadow: '0 0 1px 2px rgba(0, 0, 0, .05), 0 1px 1px rgba(0, 0, 0, .15)',
      },
    }),
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
};

export default Button;
