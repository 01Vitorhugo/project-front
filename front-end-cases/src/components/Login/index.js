import { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

function PageLogin() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    function Logar(){
        alert(`Email: ${email} \n Senha: ${senha}`);
    }

    return (
        <div className="login">
            <div className="title">
                <h1>Minha conta</h1>
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
                <p>Não tem conta? <strong><Link to="/">Cadastra-se</Link></strong></p>
            </section>


        </div>

    )
}

export default PageLogin;