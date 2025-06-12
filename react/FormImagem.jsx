import { useState } from "react";

function FormImagem({ onAdicionar }) {
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [desc, setDesc] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !url) return;
        onAdicionar({ title: title, url, desc });
        setTitle("");
        setUrl("");
        setDesc("");
        alert("Imagem adicionada com sucesso!");
    }

    return (
        <div className="adicionar-imagem-container">
            <form onSubmit={handleSubmit}>
                <h2>Adicionar imagem</h2>
                <input
                    type="text"
                    placeholder="Digite o título da sua imagem:"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="url"
                    placeholder="Digite a URL da sua imagem:"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                />
                <input
                type="text"
                placeholder="Digite a descrição da sua imagem (opcional):"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
            />
                <button type="submit">Adicionar</button>
            </form>
        </div>
    )
}
export default FormImagem;