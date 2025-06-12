function TarefaCheckbox({value, onChange}) {
    const opcoes = ['Concluída', 'Não concluída'];

    return (
        <div className="todolist-done-checkbox">
            {opcoes.map(opcao => (
                <label key={opcao}>
                    <input
                        type="radio"
                        placeholder="Selecione se a tarefa está concluída:"
                        value={opcao}
                        checked={value === (opcao === "Concluída")}
                        onChange={() => onChange(opcao === "Concluída")}
                        required
                    />
                    {opcao}
                </label>
            ))}
        </div>
    );
}
export default TarefaCheckbox;