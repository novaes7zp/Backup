import { Link } from "react-router-dom"

import { useRef } from "react"

import api from "../../services/api.js"

function Cadastro() {

    const nameRef = useRef()
    const emailRef = useRef()
    const senhaRef = useRef()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            await api.post('/cadastro', {
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: senhaRef.current.value,
            })
            alert('Usuario cadastrado!')
        } catch (err) {
            alert('Erro ao tentar cadastrar usuario')
        }
        
    }

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Cadastro</h2>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <input
                    ref={nameRef}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"

                    type="text"
                    placeholder="Nome"
                />

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

                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400">Cadastrar</button>
            </form>

            <Link to="/login" className="text-blue-800 hover:underline block mt-4 text-center ">Já tem uma conta? Faça login</Link>
        </div>
    )
}

export default Cadastro