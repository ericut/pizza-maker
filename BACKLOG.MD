### Objetivo

- Criar formulário com componente Multistep (Wizard) para montagem de uma pizza, com passos distintos

  - Passo 1: escolha do tamanho da pizza (broto, normal, gigante)
  - Passo 2: escolha da massa da pizza (fina, tracional, grossa)
  - Passo 3: escolha do sabor da pizza (recheios)
  - Passo 4: escolha de borda recheada
  - Passo 5: confirmação do pedido da pizza

- O formulário deve recomendar a "Pizza do Dia" que se for selecionada recebe pontos extras, trataremos a pizza do dia no topo do formulário
- Os pontos devem se acumular após realização do pedido

### Metodologias

- Formulário será um componente de Multistep Form controlado com hooks interno
- O Mockup do backend será criado como service in promises
- Será utilizado localStorage para guardar a no header pontuação

### Base de dados

- Pizza

  - Nome da pizza
  - Descrição de ingredientes (básico)
  - Valor
  - Pontuação gerada
  - Pizza do dia [recomendação será ligada já com o sabor da pizza]

### Tecnologias

Chakra.Ui

- Será utilizado o framework de interface front-end Chakra.Ui para que o desenvolvimento seja criado com maior agilidade, os componentes serão customizados conforme a necessidade do projeto.

#### Boilerplate

Para iniciar o projeto será utilizado um Boilerplate customizado por Eric Frank Li baseados em ReactJS + Chakra.UI
