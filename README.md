# Lista de Tarefas com React

Este projeto é uma aplicação web desenvolvida em React para gerenciar uma lista de tarefas. Ele permite adicionar novas tarefas, marcar como concluídas e remover tarefas da lista. Além disso, exibe estatísticas sobre o número total de tarefas, tarefas pendentes e tarefas concluídas.

## Funcionalidades:

- Adicionar novas tarefas à lista.
- Marcar tarefas como concluídas.
- Remover tarefas da lista.
- Filtrar tarefas por nome.
- Exibir estatísticas atualizadas sobre as tarefas.

## Estrutura do Código:

O projeto está estruturado de forma a facilitar a gestão e visualização de uma lista de tarefas utilizando React. A estruturação dos componentes visa separar responsabilidades e promover a reutilização de código onde possível.

### Componentes Principais

#### App

O componente `App` é o componente principal da aplicação. Ele é responsável por gerenciar o estado global das tarefas (`tarefas`) através do hook `useState`. Além disso, ele renderiza os componentes filhos que compõem a interface principal da aplicação:

- **FormTarefa**: Componente responsável por adicionar novas tarefas à lista.
- **RenderizarTarefas**: Componente que filtra e exibe as tarefas na interface.
- **Estatisticas**: Componente que exibe estatísticas sobre o número total de tarefas, tarefas concluídas e tarefas pendentes.

##### Funcionalidades Implementadas:

- **Adicionar Tarefa**
- **Concluir Tarefa**
- **Remover Tarefa**

#### FormTarefa

O componente `FormTarefa` é responsável por capturar o nome de uma nova tarefa e adicioná-la à lista quando o formulário é submetido. Ele utiliza o hook `useState` para gerenciar o estado local `nomeTarefa` e atualizá-lo conforme o usuário digita.

#### RenderizarTarefas

O componente `RenderizarTarefas` recebe as propriedades `arrayTarefas`, `removerTarefa` e `concluirTarefa`. Ele filtra as tarefas com base em uma pesquisa e mapeia cada tarefa para renderizar na interface.

##### Funcionalidades Implementadas:

- **Filtrar Tarefas**
- **Marcar como Concluída**
- **Remover Tarefa**

#### Estatisticas

O componente `Estatisticas` recebe as propriedades `arrayTarefas`, `tarefasConcluidas` e `tarefasPendentes`, exibindo estatísticas e percentuais sobre o número total de tarefas, tarefas concluídas e tarefas pendentes na interface.

## Considerações Finais

A estrutura do código foi planejada para ser modular e escalável, facilitando a manutenção e adição de novas funcionalidades. Cada componente desempenha um papel específico na aplicação, promovendo a separação de interesses e a reutilização de código.

## Aplicação em Vercel

É possível acessar a aplicação facilmente por meio do link: https://lista-de-tarefas-em-react-seven.vercel.app/

---

Aproveite e melhore seu planejamento com a Lista de Tarefas em React! ⚛️📔
