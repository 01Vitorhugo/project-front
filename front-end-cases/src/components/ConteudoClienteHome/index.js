import './conteudoCliente.css';
import { Link } from 'react-router-dom';
import { StateContext } from '../../ContextApi/states';
import { useContext } from 'react';

function ConteudoClienteHome() {

    const { apiParaVoce } = useContext(StateContext);


    return (
        <div className="conteudoClienteHome">
            <div className="title">
                <h1>Para você</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="8" viewBox="0 0 15 8" fill="none">
                    <path d="M2.8125 0L0 2.04545L7.5 7.5L15 2.04545L12.1875 0L7.5 3.40909L2.8125 0Z" fill="white" />
                </svg>
            </div>

            <div className="conteudo">
                <section>

                    {
                        apiParaVoce.map((list) => {
                            return (
                                <div className="conteudoCliente" key={list.id}>
                                    <figure>
                                        <img src={list.img} alt="img-produto" />
                                    </figure>
                                    <h2>{list.valor} Reais</h2>
                                    <div className='produto'>
                                        <Link to="/CriarPage">Ver Capinha</Link>

                                    </div>

                                </div>

                            )
                        })
                    }


                </section>


            </div>



        </div>

    )
}


export default ConteudoClienteHome;