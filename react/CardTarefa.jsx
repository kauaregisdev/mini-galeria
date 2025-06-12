function CardTarefa({title, done}) {
    return (
        <div className="card-tarefa-container">
            <h4>{title}</h4>
            <h5>Status: {done}</h5>
        </div>
    )
}
export default CardTarefa;