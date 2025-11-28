import { useEffect, useState } from "react"

import api from "../../services/api.js"

function ListarUsuarios() {

    const [allUsers, setallUsers] = useState()

    useEffect(() => {
        async function loadUsers() {

            const token = localStorage.getItem('token')
            const {data: { users }} = await api.get('/listar-usuarios', {

                headers: {Authorization: `Bearer ${token}`}
                
            })
            
            setallUsers(users)
        }
        loadUsers()
    }, [])
    

    async function handleSubimit(e) {
        e.preventDefault()

        navigate('/cadastro')
    }    

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-md shadow-lg">
            <h2 className="text-center text-2xl font-bold mb-6 text-gray-800">Lista de Usuarios</h2>

            <ul className="space-y-3">
                {allUsers && allUsers.length >= 0 && allUsers.map((user) => (
                    <li key={user.id} className="bg-gray-200 p-4 rounded-md shadow-lg font-semibold">
                        <p><span className="text-green-600">ID: </span>{user.id}</p>
                        <p><span className="text-green-700">NOME: </span> {user.name}</p>
                        <p><span className="text-green-700">EMAIL:</span> {user.email}</p>
                    </li>
                ))}
                
            </ul>

            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400 my-7" onSubmit={handleSubimit}>Voltar</button>
        </div>
    )
}

export default ListarUsuarios