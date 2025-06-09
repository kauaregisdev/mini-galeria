function CardImagem({ title, url, desc }) {
    return (
        <div id="imagem" className="card-imagem-container">
            <h4>{title}</h4>
            <img src={url} alt={title}/>
            <p>{desc}</p>
            <button onClick={() => alert(`Curtindo: ${title}`)}>Curtir</button>
        </div>
    );
}
export default CardImagem;