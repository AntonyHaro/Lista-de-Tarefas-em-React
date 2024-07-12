import { useState } from "react";

function FormTarefa(props) {
    const [nomeTarefa, setNomeTarefa] = useState("");
    const isConcluida = false;

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit({ nomeTarefa, isConcluida });
        setNomeTarefa("");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={nomeTarefa}
                    onChange={(event) => setNomeTarefa(event.target.value)}
                    placeholder="Nome da Tarefa"
                    required
                />
                <button type="submit" className="botao-adicionar">
                    + Adicionar
                </button>
            </form>
        </>
    );
}

export default FormTarefa;
