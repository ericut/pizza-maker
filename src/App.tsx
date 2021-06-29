import { BrowserRouter, Switch, Route } from 'react-router-dom';
// chakra provider
import { ChakraProvider } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
// imagens
import PizzaStoomTheme from './theme/index';
// pagina
import FirstPage from './pages/FirstPage/FirstPage';
// componentes
import Header from './components/Header/Header';

const App = () => {
  return (
    <ChakraProvider resetCSS={true} theme={PizzaStoomTheme}>
      <BrowserRouter>
        <Box h="100vh" maxW="100%">
          <Header />
          <Switch>
            <Route exact path="/" component={FirstPage}></Route>
          </Switch>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
