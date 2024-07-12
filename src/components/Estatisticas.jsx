function Estatisticas({ arrayTarefas, tarefasConcluidas, tarefasPendentes }) {

    return (
        <section>
            <p className="status-lista">Tarefas: {arrayTarefas.length}</p>
            <p className="status-lista">Pendentes: {tarefasPendentes}</p>
            <p className="status-lista">Concluidas: {tarefasConcluidas}</p>
        </section>
    );
}

export default Estatisticas;
