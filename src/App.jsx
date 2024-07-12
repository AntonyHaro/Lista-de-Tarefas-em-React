import { useState } from "react";
import FormTarefa from "./components/FormTarefa";
import RenderizarTarefas from "./components/RenderizarTarefas";
import Estatisticas from "./components/Estatisticas";

function App() {
    const [tarefas, setTarefas] = useState([]);

    const adicionarTarefa = (tarefa) => {
        setTarefas([...tarefas, tarefa]);
    };

    const concluirTarefa = (tarefa) => {
        const tarefaConcluida = tarefas[tarefa];
        tarefaConcluida.isConcluida = true;
    };

    const removerTarefa = (tarefa) => {
        tarefas.splice(tarefa, 1);
    };

    const tarefasConcluidas = tarefas.filter(
        (tarefa) => tarefa.isConcluida
    ).length;

    const tarefasPendentes = tarefas.length - tarefasConcluidas;

    return (
        <main>
            <h1>Lista de Tarefas</h1>

            <FormTarefa onSubmit={adicionarTarefa} />

            <hr />

            <RenderizarTarefas
                arrayTarefas={tarefas}
                concluirTarefa={concluirTarefa}
                removerTarefa={removerTarefa}
            />

            <Estatisticas
                arrayTarefas={tarefas}
                tarefasConcluidas={tarefasConcluidas}
                tarefasPendentes={tarefasPendentes}
            />
        </main>
    );
}

export default App;
