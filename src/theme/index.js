import { extendTheme } from '@chakra-ui/react';

// base do chakra
import styles from './styles';
import colors from './foundations/colors';
import fonts from './foundations/fonts';
import breakpoints from './foundations/breakpoints';

// componentes customizados
import Button from './components/button';
import Heading from './components/heading';
import Checkbox from './components/checkbox';
import { Input, NumberInput, Textarea } from './components/input';
import Select from './components/select';
import Modal from './components/modal';

const PizzaStoomTheme = extendTheme({
  styles,
  colors,
  fonts,
  breakpoints,
  components: {
    Heading,
    Button,
    Checkbox,
    Input,
    Select,
    NumberInput,
    Textarea,
    Modal,
  },
});

export default PizzaStoomTheme;
