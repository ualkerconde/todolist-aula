import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Tarefas from "./pages/Tarefas/Tarefas";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";


export default function App() {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tarefas" element={<Tarefas />} />

                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                </Routes>
            </main>
            <footer>

            </footer>
        </>
    );
}