import { useState } from "react";
import FormTarefa from "./components/FormTarefa/FormTarefa"
import RenderizarTarefas from "./components/RenderizarTarefas/RenderizarTarefas";
import Estatisticas from "./components/Estatisticas/Estatisticas";

function App() {
    const [tarefas, setTarefas] = useState([]);

    const adicionarTarefa = (tarefa) => {
        setTarefas([...tarefas, tarefa]);
    };

    const concluirTarefa = (index) => {
        setTarefas(
            tarefas.map((tarefa, i) =>
                i === index ? { ...tarefa, isConcluida: true } : tarefa
            )
        );
    };

    const removerTarefa = (index) => {
        setTarefas(tarefas.filter((_, i) => i !== index));
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
