import { useState } from "react";
import "./RenderizarTarefas.css";

function RenderizarTarefas({ arrayTarefas, removerTarefa, concluirTarefa }) {
    const [pesquisa, setPesquisa] = useState("");

    const tarefasFiltradas = arrayTarefas.filter((tarefa) => {
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
                        onClick={() => removerTarefa(index)}
                    >
                        🗑️
                    </button>
                    {!tarefa.isConcluida && (
                        <button
                            className="botao-concluir"
                            onClick={() => concluirTarefa(index)}
                        >
                            concluir
                        </button>
                    )}
                </div>
            </div>
        );
    });

    return (
        <section className="container-tarefas">
            <input
                type="text"
                value={pesquisa}
                onChange={(event) => {
                    setPesquisa(event.target.value);
                }}
                placeholder="Pesquise uma tarefa 🔎"
            />
            {arrayTarefas.length === 0 || tarefasFiltradas.length === 0 ? (
                <p style={{ opacity: "0.3", marginTop: "5%" }}>
                    Nenhuma tarefa!
                </p>
            ) : (
                resultados
            )}
        </section>
    );
}

export default RenderizarTarefas;
