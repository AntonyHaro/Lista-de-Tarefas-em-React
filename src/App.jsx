import { useState } from "react";
import FormTarefa from "./components/FormTarefa";
import RenderizarTarefas from "./components/RenderizarTarefas";

function App() {
    const [tarefas, setTarefas] = useState([]);
    const [totalTarefas, setTotalTarefas] = useState(0);
    const [tarefasConcluidas, setTarefasConcluidas] = useState(0);
    const [tarefasPendentes, setTarefasPendentes] = useState(0);

    const adicionarTarefa = (tarefa) => {
        setTarefas([...tarefas, tarefa]);
        setTotalTarefas(totalTarefas + 1);
        setTarefasPendentes(tarefasPendentes + 1);
    };

    const concluirTarefa = (tarefa) => {
        const tarefaConcluida = tarefas[tarefa];
        tarefaConcluida.isConcluida = true;
        setTarefasConcluidas(tarefasConcluidas + 1);
        setTarefasPendentes(tarefasPendentes - 1);
    };

    const removerTarefa = (tarefa) => {
        tarefas.splice(tarefa, 1);
        setTotalTarefas(totalTarefas - 1);
    };

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

            {/* <section>
                <div className="status-lista">
                    Concluidas: {tarefasConcluidas}
                </div>

                <div className="status-lista">Tarefas: {totalTarefas}</div>

                <div className="status-lista">
                    Pendentes: {tarefasPendentes}
                </div>
            </section> */}
        </main>
    );
}

export default App;
