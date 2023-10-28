import './login.css';
import { Link } from 'react-router-dom';

function PageLogin() {

    return (
        <div className="login">
            <div className="title">
                <h1>Minha conta</h1>
            </div>

            <section className="inputs-login">

                <label>Email</label>
                <input type='text'
                    placeholder="Digite seu email.."
                />

                <label>Senha</label>
                <input type='password'
                    placeholder="Digite sua senha.."
                />

                <button className="button-logar">Entrar</button>
                <p>Não tem conta? <strong><Link to="/">Cadastra-se</Link></strong></p>
            </section>


        </div>

    )
}

export default PageLogin;