import { useState } from 'react';
import './cadastro.css';
// import { Link } from 'react-router-dom';
import { auth } from '../../BD-login';
import { toast } from "react-toastify";

import { createUserWithEmailAndPassword  } from "firebase/auth"

function PageCadastro() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    async function Cadastrar(){
        await createUserWithEmailAndPassword(auth, email, senha)
        .then(()=>{
            setEmail('');
            setSenha('');
            toast.success("Cadastrado com sucesso");

        })
        .catch((error)=>{

            //senha fraca
            if(error.code === 'auth/weak-password'){
                toast.warn("Senha muito fraca");
            }else if(error.code === 'auth/email-already-in-use'){
                toast.warn("Email ja existente");
          }
            
        })
    
    }

    return (
        <div className="login">
            <div className="title">
                <h1>Cadastro</h1>
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

                <button className="button-logar" onClick={Cadastrar}>Cadastrar</button>
            </section>


        </div>

    )
}


export default PageCadastro;