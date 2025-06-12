import { useState } from "react";
import TarefaCheckbox from "./TarefaCheckbox";

function FormTarefa({onAdicionar}) {
    const [title, setTitle] = useState("");
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) return;
        onAdicionar({ title: title, done });
        setTitle("");
        setDone(false);
        alert("Tarefa adicionada com sucesso!");
    }

    return (
        <div className="todolist-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Digite o título da sua tarefa:"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <TarefaCheckbox value={done} onChange={setDone} />
                <button type="submit">Adicionar</button>
            </form>
        </div>
    )
}
export default FormTarefa;