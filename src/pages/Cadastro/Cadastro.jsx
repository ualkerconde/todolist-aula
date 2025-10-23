import "./Cadastro.css"
import { db } from "../../firebase.js"
import { collection, addDoc } from "firebase/firestore";

export default function Cadastro() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("As senhas não coincidem!");
            return;
        } else {
            addDoc(collection(db, "user"), {
                nome: e.target.nome.value,
                email: e.target.email.value,
                password: password
            })
                .then(() => {
                    alert("Usuário cadastrado com sucesso!");
                })
                .catch((error) => {
                    console.error("Erro ao cadastrar usuário: ", error);
                });
        }
    }
    return (
        <div className="cadastro-container">
            <form id="cadastro-card" action="">
                <h2>Cadastro</h2>
                <input name="nome" type="text" placeholder="Usuário" required/>
                <input name="email" type="email" placeholder="Email" required/>
                <input name="password" type="password" placeholder="Senha..." required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <input name="confirmPassword" type="password" placeholder="Confirme a senha..." required/>
                <button type="submit" onClick={handleSubmit}>Cadastrar</button>
            </form>
        </div>
    )
}