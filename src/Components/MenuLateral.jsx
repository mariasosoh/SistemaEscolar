import'./MenuLateral.css'
import { supabase } from '../supabase'

function MenuLateral() {

    {/* Adicionei a função sair para redirecionar o usuário para a página de login ao clicar no botão "Sair" */}

    const navegar = useNavigate()
        async function sair() {

            const { error } = await supabase.auth.signOut()

            console.log("Usuario fez LogOut no supabase")

            if (error) {
                alert("Erro ao sair do sistema")
                return
            }
            navegar('/')
        }
        
    return (
        <aside className= "menu-lateral">
            <h2>Menu</h2>
            <ul>
                <li>
                    <a href="#">Dashboard</a>
                </li>
                <li>
                    <a href="#">Alunos</a>
                </li>
                <li>
                    <a href="#">Professores</a>
                </li>
            </ul>

            {/*Adicionei um botão */}
            <br/>
            <button onClick={sair}>Sair</button>
        </aside>
    )
}

export default MenuLateral