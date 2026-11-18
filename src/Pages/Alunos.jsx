import './Alunos.css'

function Alunos() {
    const alunos = [
        {id: 1, nome: 'Ana Carolina Souza', email: 'ana123@email.com'},
        {id: 2, nome: 'Carlos Felipe Oliveira', email: 'carlosf45@email.com'},
        {id: 3, nome: 'Mariana Santos Godoy', email: 'godoymari@email.com'}
    ]

    return (
        <div className="pagina-alunos">
            <div className="cabecalho-alunos">
                <h1>Alunos Cadastrados</h1>

                <button className="botao-novo-aluno">
                    Novo Aluno
                </button>
            </div>

            <table className="tabela-alunos">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Ações</th>
                </tr>
            </thead>
        <tbody>
            {alunos.map((aluno)=>(
                <tr key={aluno.id}>
                    <td>{aluno.nome}</td>
                    <td>{aluno.email}</td>
                    <td>
                    <button className="botao-acao">
                        Editar
                    </button>

                    <button className="botao-acao botao-excluir">
                        Excluir
                    </button>
                </td>
            </tr>
        ))}
    </tbody>
    </table>
</div>
    )
}

export default Alunos