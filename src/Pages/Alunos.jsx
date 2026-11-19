import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import './Alunos.css'

function Alunos() {
    const [alunos, setAlunos] = useState([])
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        async function buscarAlunos() {
            const { data, error } = await supabase
                .from('alunos')
                .select('*')
                .order('nome', { ascending: true })

            if (error) {
                alert('Erro ao buscar alunos:' + error.message)
            } else {
                setAlunos(data)
            }

            setCarregando(false)
        }

        buscarAlunos()
    }, [])

    return (
        <table>
            <tbody>
                {carregando ? (
                    <tr>
                        <td colSpan="3">Carregando alunos...</td>
                    </tr>
                ) : alunos.length === 0 ? (
                    <tr>
                        <td colSpan="3">Nenhum aluno cadastrado.</td>
                    </tr>
                ) : (
                    alunos.map((aluno) => (
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
                    ))
                )}
            </tbody>
        </table>
    )
}

export default Alunos