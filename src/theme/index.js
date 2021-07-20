import { extendTheme } from '@chakra-ui/react';

// base do chakra
import styles from './styles';
import colors from './foundations/colors';
import fonts from './foundations/fonts';
import breakpoints from './foundations/breakpoints';

// componentes customizados
import Button from './components/button';
import Heading from './components/heading';

const PizzaMakerTheme = extendTheme({
  styles,
  colors,
  fonts,
  breakpoints,
  components: {
    Heading,
    Button,
  },
});

export default PizzaMakerTheme;
