import { useState } from "react";

function RenderizarTarefas(props) {
    const [pesquisa, setPesquisa] = useState("");

    const tarefasFiltradas = props.arrayTarefas.filter((tarefa) => {
        return tarefa.nomeTarefa.toLowerCase().includes(pesquisa.toLowerCase());
    });

    const resultados = tarefasFiltradas.map((tarefa, index) => {
        return (
            <div
                className={`tarefa ${tarefa.isConcluida ? "concluida" : ""}`}
                key={index}
            >
                <p>{tarefa.nomeTarefa}</p>
                <div className="container-botoes">
                    <button
                        className="botao-remover"
                        onClick={() => props.removerTarefa(index)}
                    >
                        🗑️
                    </button>
                    {!tarefa.isConcluida && (
                        <button
                            className="botao-concluir"
                            onClick={() => props.concluirTarefa(index)}
                        >
                            concluir
                        </button>
                    )}
                </div>
            </div>
        );
    });

    return (
        <>
            <input
                type="text"
                value={pesquisa}
                onChange={(event) => {
                    setPesquisa(event.target.value);
                }}
                placeholder="Pesquisar uma tarefa"
            />
            <div className="container-tarefas">{resultados}</div>
        </>
    );
}

export default RenderizarTarefas;
