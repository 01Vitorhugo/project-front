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
            })
            .catch(() => {
                toast.error("Erro ao fazer login");
                setLog(false);
            })

           
    }

    if(log === true){
        // window.location.href = "http://localhost:3000/";

        return(
            <div className='online'>
                <button> <Link to="/">Home</Link> </button>

            </div>
        )


    }

    // console.log(log);

    return (
        <div className="login">
            <div className="title">
                <h1>Minha conta</h1>
            </div>

            <section className="inputs-login">

                <label>Email</label>
                <input type='email'
                    placeholder="Digite seu email.."
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    name='email'
                    required
                />

                <label>Senha</label>
                <input type='password'
                    placeholder="Digite sua senha.."
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                    name='password'
                    required
                />

                <button className="button-logar" onClick={Logar}>Entrar</button>


                <p>Não tem conta? <strong><Link to="/cadastro">Cadastra-se</Link></strong></p>
            </section>


        </div>

    )
}


export default PageLogin;