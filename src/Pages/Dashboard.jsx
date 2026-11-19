import { useState } from 'react'
import './Dashboard.css'
import Cabecalho from '../Components/Cabecalho'
import MenuLateral from '../Components/MenuLateral'
import Botao from '../Components/Botao'
import CampoTexto from '../Components/CampoTexto'
import CartaoIndicador from '../Components/CartaoIndicador'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <Cabecalho/>
        <CampoTexto
          label="Cadastre seu Email para receber nossas novidades."
          tipo="email"
        />
         <Botao>Cadastrar</Botao>

      <main className='conteudo'>
        <h2>Dashboard</h2>
        <p> Bem-Vindo ao Sistema! </p>

        <div className="layout"></div>

        <MenuLateral/>

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        </main>
        
        </div>
        <div className='Indicadores'>
          <CartaoIndicador
            titulo="Total de Alunos"
            valor="120"
          />

          <CartaoIndicador
            titulo="Total de Professores"
            valor="15"
          />

          <CartaoIndicador
          titulo="Avaliações Realizadas"
          valor="85"
          />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        </div>
      </>
  )
}

  export default App
