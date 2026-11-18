import { supabase } from "../supabase."
import { useState, useEffect } from "react"
import CampoTexto from "../Components/CampoTexto"
import Botao from "../Components/Botao"
import'./Login.css'

function Login() {
    return (
        <div className="pagina-login">
          <form className="formulario-login">
          <h1>Sistema de Qualidade do Ensino</h1>

        <h2>Entrar no Sistema</h2>

        <CampoTexto
            label="Email"
            tipo="email"
        />

        <CampoTexto
            label="Senha"
            tipo="password"
        />

        <Botao>Entrar</Botao>
    </form>
    </div>

    )
}

export default Login