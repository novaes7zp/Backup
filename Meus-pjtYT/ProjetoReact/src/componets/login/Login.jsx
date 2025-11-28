import React from 'react'

import { useState } from 'react'

import "./Login.css"

const Login = () => {

    const [username, setUsername] = useState("")

    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {

        event.preventDefault()

        console.log('Email:', username, 'Senha:', password)
        
        console.log('Envio'); 'Envio'
    }

    

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <h1>Ricardo Novaes</h1>
            <h2>Faça o Login</h2>

            <div className='input-field'>
                <input
                    type="email"
                    placeholder='Email'
                    onChange={(e) => setUsername(e.target.value)}
                />
                <i className="fa-solid fa-user icon"></i>
            </div>

            <div className='input-field'>
                <input
                    type="password"
                    placeholder='Senha'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <i className="fa-solid fa-lock icon"></i>
            </div>

            <div className='recall-forget'>
                <label>
                    <input type="checkbox"/>
                    Lembre de mim
                </label>

                <a href="#">Esqueci a senha</a>
            </div>

            <button>Entrar</button>

            <div className="sigup-link">
                <p>Não tem uma conta? <a href="#">Resgistrar</a></p>
                
            </div>
        </form>

        
    </div>

    
  )
}

export default Login
