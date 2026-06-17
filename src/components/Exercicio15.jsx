import '../Exercicio15.css';

function Exercicio15(props) {
    return (
        <>
            <h2>Exercício 15</h2>
            <p>Minhas tarefas hoje:</p>
            <ol>
                <li>{props.tarefa1}</li>
                <li>{props.tarefa2}</li>
                <li>{props.tarefa3}</li>
            </ol>
        </>
    )
}

export default Exercicio15