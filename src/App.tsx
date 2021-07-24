import { BrowserRouter, Switch, Route } from 'react-router-dom';
// chakra provider
import { ChakraProvider } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
// imagens
import PizzaMakerTheme from './theme/index';
// pagina
import MonteSuaPizza from './pages/MonteSuaPizza/MonteSuaPizza';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <ChakraProvider resetCSS={true} theme={PizzaMakerTheme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Box h="100vh" maxW="100%">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/montesuapizza" component={MonteSuaPizza}></Route>
          </Switch>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
