import { useState } from "react";
import './novidades.css';


function NovidadesHome() {
    const [title] = useState('Novidades');

    return (
        <div className="novidades">
            <div className="title">
                <h1>{title}</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="8" viewBox="0 0 15 8" fill="none">
                    <path d="M2.8125 0L0 2.04545L7.5 7.5L15 2.04545L12.1875 0L7.5 3.40909L2.8125 0Z" fill="white" />
                </svg>
            </div>

            <section>
                <div className="conteudo">
                    <figure>
                        <img src={require('../../Imagens/produto.png')} alt="img-produto" />
                    </figure>
                    <h2>NomeProduto</h2>
                    <h1>25 <strong>Reais</strong></h1>

                </div>

                <div className="conteudo">
                    <figure>
                        <img src={require('../../Imagens/produto.png')} alt="img-produto" />
                    </figure>
                    <h2>NomeProduto</h2>
                    <h1>25 <strong>Reais</strong></h1>

                </div>

                <div className="conteudo">
                    <figure>
                        <img src={require('../../Imagens/produto.png')} alt="img-produto" />
                    </figure>
                    <h2>NomeProduto</h2>
                    <h1>25 <strong>Reais</strong></h1>

                </div>

                <div className="conteudo">
                    <figure>
                        <img src={require('../../Imagens/produto.png')} alt="img-produto" />
                    </figure>
                    <h2>NomeProduto</h2>
                    <h1>25 <strong>Reais</strong></h1>

                </div>

                <div className="conteudo">
                    <figure>
                        <img src={require('../../Imagens/produto.png')} alt="img-produto" />
                    </figure>
                    <h2>NomeProduto</h2>
                    <h1>25 <strong>Reais</strong></h1>

                </div>

                <div className="conteudo">
                    <figure>
                        <img src={require('../../Imagens/produto.png')} alt="img-produto" />
                    </figure>
                    <h2>NomeProduto</h2>
                    <h1>25 <strong>Reais</strong></h1>

                </div>

                <div className="conteudo">
                    <figure>
                        <img src={require('../../Imagens/produto.png')} alt="img-produto" />
                    </figure>
                    <h2>NomeProduto</h2>
                    <h1>25 <strong>Reais</strong></h1>

                </div>

                <div className="conteudo">
                    <figure>
                        <img src={require('../../Imagens/produto.png')} alt="img-produto" />
                    </figure>
                    <h2>NomeProduto</h2>
                    <h1>25 <strong>Reais</strong></h1>

                </div>

                <div className="conteudo">
                    <figure>
                        <img src={require('../../Imagens/produto.png')} alt="img-produto" />
                    </figure>
                    <h2>NomeProduto</h2>
                    <h1>25 <strong>Reais</strong></h1>


                </div>

                <div className="conteudo">
                    <figure>
                        <img src={require('../../Imagens/produto.png')} alt="img-produto" />
                    </figure>
                    <h2>NomeProduto</h2>
                    <h1>25 <strong>Reais</strong></h1>

                </div>

            </section>

        </div>
    )
}




export default NovidadesHome;