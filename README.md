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

- **Adicionar Tarefa**: Utiliza o componente `FormTarefa` para capturar e adicionar novas tarefas ao estado `tarefas`.
- **Concluir Tarefa**: A função `concluirTarefa` é passada como propriedade para `RenderizarTarefas`, permitindo marcar uma tarefa como concluída.

- **Remover Tarefa**: Utiliza a função `removerTarefa` para remover uma tarefa da lista.

#### FormTarefa

O componente `FormTarefa` é responsável por capturar o nome de uma nova tarefa e adicioná-la à lista quando o formulário é submetido. Ele utiliza o hook `useState` para gerenciar o estado local `nomeTarefa` e atualizá-lo conforme o usuário digita.

#### RenderizarTarefas

O componente `RenderizarTarefas` recebe as propriedades `arrayTarefas`, `removerTarefa` e `concluirTarefa`. Ele filtra as tarefas com base em uma pesquisa e mapeia cada tarefa para renderizar na interface.

##### Funcionalidades Implementadas:

- **Filtrar Tarefas**: Utiliza o estado local `pesquisa` para filtrar as tarefas com base no nome da tarefa.
- **Marcar como Concluída**: Permite que o usuário marque uma tarefa como concluída através da função `props.concluirTarefa`.

- **Remover Tarefa**: Utiliza a função `props.removerTarefa` para remover uma tarefa da lista.

#### Estatisticas

O componente `Estatisticas` recebe as propriedades `arrayTarefas`, `tarefasConcluidas` e `tarefasPendentes`, exibindo estatísticas sobre o número total de tarefas, tarefas concluídas e tarefas pendentes na interface.

## Considerações Finais

A estrutura do código foi planejada para ser modular e escalável, facilitando a manutenção e adição de novas funcionalidades. Cada componente desempenha um papel específico na aplicação, promovendo a separação de interesses e a reutilização de código.

## Aplicação em Vercel

É possível verificar e fazer o uso da aplicação por meio do link: https://aplicacao

---

Aproveite e melhore seu planejamento com a Lista de Tarefas em React! ⚛️📔
