import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Cadastro from "./pages/Cadastro"
import Login from "./pages/Login"
import ListarUsuarios from "./pages/Lista"


function App() {

  return (
    <BrowserRouter>
      <header className="bg-blue-600 text-white p-4 shadow-md h-[px]">
        <h1 className="text-xl font-bold text-center py-[9px]">Sistema de Cadastrado de Usuarios</h1>
      </header>
        <Routes>
            <Route path="/" element={<Cadastro />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/listar-usuarios" element={<ListarUsuarios />}/>
        </Routes>

    </BrowserRouter>
  )
}

export default App
