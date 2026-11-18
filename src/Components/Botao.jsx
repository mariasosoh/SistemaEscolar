import './Botao.css'

function Botao({ children }) {
    return (
        <button className="botão">
            {children}
        </button>
    )
}

export default Botao
