import './style.css'
import '@fortawesome/fontawesome-free'
import api from '../../services/api'
import { useEffect, useState, useRef } from 'react'

function Home() {

  const [users, setUsers] = useState([])

  async function getUsers() {
    
  }

  useEffect(() => {
    getUsers()
  }, [])

  const inputName = useRef()
  const inputIdade = useRef()
  const inputEmail = useRef()

  async function createUsers() {
    await api.post('/cadastro', {
      name: inputName.current.value,
      idade: inputIdade.current.value,
      email: inputEmail.current.value
    })
  }

  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usúarios</h1>
        <input type="text" name="nome" id="" placeholder='Nome' ref={inputName}/>
        <input type="number" name="idade" id="" placeholder='Idade' ref={inputIdade}/>
        <input type="email" name="email" id="" placeholder='Email' ref={inputEmail}/>

        <button type='button' onClick={createUsers}>Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome:  <span>{user.name}</span></p>
            <p>Idade: <span>{user.idade}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <i className="fa-regular fa-trash-can"></i>
          </button>
      </div>
      ))}

    </div>


  )
}

export default Home
