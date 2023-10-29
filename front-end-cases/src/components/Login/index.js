import { useContext, useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { auth } from '../../BD-login';
import { toast } from "react-toastify";

import { signInWithEmailAndPassword } from "firebase/auth"
import { StateContext } from '../../ContextApi/states';


function PageLogin( ) {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const {log, setLog} = useContext(StateContext);

    async function Logar() {

        await signInWithEmailAndPassword(auth, email, senha)
            .then(() => {
                setEmail('');
                setSenha('');
                setLog(true);
                toast.success("Logado com sucesso");
            })
            .catch(() => {
                toast.error("Erro ao fazer login");
            })
    }

    console.log(log);

    return (
        <div className="login">
            <div className="title">
                <h1>Minha conta</h1>
                {log === true ? <p>Logado</p> : <p>Deslogado</p> }
            </div>

            <section className="inputs-login">

                <label>Email</label>
                <input type='text'
                    placeholder="Digite seu email.."
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <label>Senha</label>
                <input type='password'
                    placeholder="Digite sua senha.."
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                />

                <button className="button-logar" onClick={Logar}>Entrar</button>


                <p>Não tem conta? <strong><Link to="/cadastro">Cadastra-se</Link></strong></p>
            </section>


        </div>

    )
}


export default PageLogin;