import "./Estatisticas.css";

function Estatisticas({ arrayTarefas, tarefasConcluidas, tarefasPendentes }) {
    const porcentagemConcluidas =
        arrayTarefas.length === 0
            ? 0
            : ((tarefasConcluidas / arrayTarefas.length) * 100).toFixed(0);

    const porcentagemPendentes =
        porcentagemConcluidas === 0 ? 0 : 100 - porcentagemConcluidas;

    return (
        <section className="estatistica-container">
            <div className="estatistica-item">
                <p>Tarefas:</p>
                <h1 className="porcentagem">{arrayTarefas.length}</h1>
            </div>
            <div className="estatistica-item">
                <p>Pendentes: {tarefasPendentes}</p>
                <h1 className="porcentagem">{porcentagemPendentes}%</h1>
            </div>

            <div className="estatistica-item">
                <p>Concluidas: {tarefasConcluidas}</p>
                <h1 className="porcentagem">{porcentagemConcluidas}%</h1>
            </div>
        </section>
    );
}

export default Estatisticas;
