# Pizza Prototype

Prototipagem de aplicação para pedidos de pizza e acumulo de ponto para possíveis cashback.
Todos os componentes e tecnologias são de autoria deste desenvolvedor permitindo o uso e licença livre.

## Install + Start

Para instalar as dependências do React:
`npm install`

Para iniciar o projeto no localhost
`npm run start`

### Como utilizar

- Montar sua pizza conforme passo a passo do formulário

  - Passo 1: escolha do tamanho da pizza (broto, normal, gigante)
  - Passo 2: escolha da massa da pizza (fina, tracional, grossa)
  - Passo 3: escolha do sabor da pizza (recheios)
  - Passo 4: escolha de borda recheada
  - Passo 5: confirmação do pedido da pizza

- É recomendando a "Pizza do Dia" que se for selecionada recebe ponto em dobro
- Os pontos são acumulados após realização do pedido

### Metodologias

- Formulário é um componente de Multistep Form controlado com hooks interno
- O Mockup do backend é service in promises

### Base de dados

- Sabor Pizza

  - Nome da pizza
  - Descrição de ingredientes
  - Valor
  - Pontuação gerada
  - Pizza do dia [recomendação será ligada já com o sabor da pizza]

- Tamanho

  - Nome
  - Variante [esta variante determinar o valor final da pizza dependendo do seu tamanho]

- Tipo Massa

  - Nome

- Borda Recheada [não obrigatório]

  - Nome
  - Valor

### Tecnologias

Chakra.Ui

- https://chakra-ui.com/ - Framework de interface front-end

React Icons

- https://react-icons.github.io/react-icons/ - Ícones com várias bibliotecas

#### Boilerplate

O projeto foi iniciado com um boilerplate customizado por este desenvolvedor baseados em ReactJS, Chakra.UI e Typescript

#### Possíveis próximos passos

- Refinamento do código
- Aplicações e correções de algumas interfaces typescript
- Tela de login / Seleção de nome
- ...
