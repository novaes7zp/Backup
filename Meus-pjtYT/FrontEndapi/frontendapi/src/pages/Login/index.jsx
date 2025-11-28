import { Link, useNavigate } from "react-router-dom"

import { useRef } from "react"

import api from "../../services/api.js"

function Login() {

    const emailRef = useRef()
    const senhaRef = useRef()

    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const {data:token} = await api.post('/login', {
                email: emailRef.current.value,
                password: senhaRef.current.value,
            })

            localStorage.setItem('token', token)
            
            navigate('/listar-usuarios')
        } catch (err) {
            alert('Senha ou email incorretos!')
        }
        
    }

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                
                <input
                    ref={emailRef}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"

                    type="email"
                    placeholder="Email"
                />

                <input
                    ref={senhaRef}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"

                    type="password"
                    placeholder="Senha"
                />

                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400">Login</button>
            </form>

            <Link to="/" className="text-blue-800 hover:underline block mt-4 text-center ">Não tem uma conta? Faça o cadastro</Link>
        </div>
    )
}

export default Login