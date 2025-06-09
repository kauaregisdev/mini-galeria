import { useState } from "react";

function FormImagem({ onAdicionar }) {
    const [titulo, setTitulo] = useState("");
    const [url, setUrl] = useState("");
    const [desc, setDesc] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!titulo || !url) return;
        onAdicionar({ title: titulo, url, desc });
        setTitulo("");
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
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
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